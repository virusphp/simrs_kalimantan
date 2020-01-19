<?php

namespace App\Http\Middleware;

use Closure;
use Firebase\JWT\JWT;

class ApiAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
	// TODO
	// check Token
	//
	try {
		if ( $request->header('Authorization') === null ) {
			return response()->json(['status' => 'Failed', 'message' => 'No Token passed']);
		}

		// $token = $request->header('Authorization');
		$token = explode('Bearer', $request->header('Authorization'));

		//print($token[1]); die();

		$token = trim($token[1]);

	    $key = "generated_keys";
	    $decoded = JWT::decode($token, $key, ['HS256']);
	    $request->merge(['decoded_jwt' => $decoded]);
		return $next($request);
	} catch (\Firebase\JWT\ExpiredException $e) {
	    return response()->json(['status' => 'Failed', 'message' => 'Token Expired', 'status_code' => 510])->setStatusCode(510, 'Failed');
	}    
    }
}
