<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User as AppUsers;
use Illuminate\Support\Facades\Validator;
use \Firebase\JWT\JWT;

class AppUserController extends Controller
{
    //
    //
    protected $key = 'generated_keys';

    public function register(Request $request)
    {
	$validator = Validator::make($request->all(), [
	    'email' => 'required|unique:App\User,email',
	    'password' => 'required|max:255',
	    'password_confirmation' => 'required|max:255',
	    'nama' => 'required|max:255',
	    'identitas' => 'required',
	    'no_identitas' => 'required',
	    'alamat' => 'required'
	]);

	if ($validator->fails()) {
	   return \Response::json($validator->errors());
	} else {
		try {
				$appUser = new AppUsers;
				$appUser->email = $request->email;
				$appUser->password = bcrypt($request->password);
				$appUser->nama = $request->nama;
				$appUser->identitas = $request->identitas;
				$appUser->no_identitas = $request->no_identitas;
				$appUser->alamat = $request->alamat;

				$appUser->save();
				return \Response::json(['Success']);

		} catch (\Exception $e)	{
			return \Response::json(['Failed']);
		}
	}
    }

    public function login(Request $request) 
	{
		
		$validator = Validator::make($request->all(), [
			'email' => 'required',
			'password' => 'required|max:255',
		]);
		
		if ($validator->fails()) {
			return \Response::json($validator->errors());
		} else {

			$email = $request->email;
			$password = $request->password;
			
			try {
				$user = AppUsers::select('id', 'email', 'password', 'nama')->where('email', '=', $email)->first();

				if ($user != null) {
					if (\Hash::check($password, $user->password)) {
						$time = time();
						$data = [
							'user_id' => $user->id,  
							'user_email' => $user->email
						];

						$user = [
							'id' => $user->id,
							'email' => $user->email,
							'nama' => $user->nama
						];

						$user = (Object) $user;

						$token_expiry = $time + 15*60; // 60 detik = 1 menit 
						$payload = [
							'data' => $user,
							'iat' => $time,
							'nbf' => $time,
							'exp' => $token_expiry,
							'iss' => "rsudpapua",
							"aud" => "rsudpapua"
						];
						$key = "generated_keys";
						$jwt = JWT::encode($payload, $key);

						$payload = [
							'iat' => $time,
							'email' => $user->email
						];
					
						$string = md5($user->id . $time . time());
						$refresh_token = hash_hmac('sha256', $string, time());

						return response()->json([
							'result' => 'Success',	
							'token' => $jwt,
							'refresh_token' => $refresh_token,
							'token_expiry' => $token_expiry,
							'nama' => $user->nama,
							'expired_at' => date('Y-m-d H:i:s', $time),
						])->setStatusCode(200, "Success")
						->cookie('refresh_token', $refresh_token, $token_expiry, "", "", 1);
					}
				}else{
					return response()->json(['result'=> 'Failed', 'message' => 'Password Incorrect'])->setStatusCode(400, "Fail");
				}
			} catch (\Exception $e)  {
				return response()->json(['result' => 'Failed', 'message' => 'Cannot connect to database'])
					->setStatusCode(501, "Database Fail");
			}	
		}
    }

    public function authenticated(Request $request)
    { 
	try {
	    $key = "generated_keys";
	    $decoded = JWT::decode($request->token, $key, ['HS256']);
	    return response()->json($decoded)->setStatusCode(200, "Valid");
	} catch (Exception $e) {
	    return response()->json([])->setStatusCode(400, "Not Valid");
	}
	}

	public function checkValidEmail(Request $request)
	{
		// return response()->json([$request->email]);
		$exists = AppUsers::where('email', $request->email)->exists();
		if ($exists) {
			return response()->json(['message' => 'Email sudah digunakan', 'email_exists' => true]);
		} else {
			return response()->json(['message' => 'Email tersedia', 'email_exists' => false]);
		}
	}

	public function reloadToken(Request $request) {
		if ( $request->cookie('refresh_token') != $request->refresh_token ) {
			return response()->json(['message' => '', 'status' => 'Failed', 'cookie' => $request->cookie('refresh_token')]);
		}

		$token = $request->token;
		
		$decoded_jwt = $request->decoded_jwt;

		// print_r($decoded_jwt);

		$time = time();

		$user = (Object) [
			'id' => $decoded_jwt->data->id,
			'email' => $decoded_jwt->data->email,
			'nama' => $decoded_jwt->data->nama
		];

		$data = [
			'user_id' => $decoded_jwt->data->id,  
			'user_email' => $decoded_jwt->data->email,
		];

		$token_expiry = $time + 15*60; // 60 detik = 1 menit 
		$payload = [
			'data' => $user,
			'iat' => $time,
			'nbf' => $time,
			'exp' => $token_expiry,
			'iss' => "rsudpapua",
			"aud" => "rsudpapua"
		];
		$key = "generated_keys";
		$jwt = JWT::encode($payload, $key);

		$payload = [
			'iat' => $time,
			'email' => $decoded_jwt->data->email
		];
	
		$string = md5($user->id . $time . time());
		$refresh_token = hash_hmac('sha256', $string, time());

		return response()->json([
			'result' => 'Success',	
			'token' => $jwt,
			'refresh_token' => $refresh_token,
			'token_expiry' => $token_expiry,
			'nama' => $user->nama,
			'expired_at' => date('Y-m-d H:i:s', $time),
		])->setStatusCode(200, "Success")
		->cookie('refresh_token', $refresh_token, $token_expiry, "", "", 1);
	}
}
