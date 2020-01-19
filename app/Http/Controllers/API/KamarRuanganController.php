<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\KamarRuangan;

class KamarRuanganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
	//
	$kamar_ruangan = KamarRuangan::select(DB::raw('COUNT(*), kelaspelayanan_id'))->with(['ruangan', 'kelaspelayanan'])
			    ->where('keterangan_kamar','TERSEDIA')
			    ->orderBy('kelaspelayanan_id')
			    ->groupBy('kelaspelayanan_id')
			    ->get()->toJson(JSON_PRETTY_PRINT);
	return response($kamar_ruangan, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
	}


	public function ruangan() 
	{
		$ruangan = Ruangan::select(DB::Raw('ruangan_nama, ruangan_id'))->get()->toJson(JSON_PRETTY_PRINT);

		return response($ruangan, 200);

	}

	public function getAvailableRooms(Request $request) 
	{
			$available_kamar = KamarRuangan::select(DB::raw('COUNT(kamarruangan_id) as jumlah_kamar_open, 
					kelaspelayanan_m.kelaspelayanan_nama'))
			->leftJoin('kelaspelayanan_m', 'kelaspelayanan_m.kelaspelayanan_id', '=', 'kamarruangan_m.kelaspelayanan_id')
			->groupBy('kamarruangan_m.kelaspelayanan_id', 'kelaspelayanan_nama')
			->where(function($query) use ($request){
				$query->whereIn('keterangan_kamar', ['TERSEDIA', 'OPEN'])
					->where('kamarruangan_m.kamarruangan_nokamar', 'not like', '%ICU%')
					->where('kelaspelayanan_nama', '=', $request->input('kelas'));
			})
			->orderBy('kamarruangan_m.kelaspelayanan_id')
			//->dump();
			->get();

		return response()->json([
			'status' => 'Success',
			'res' => $available_kamar,
		])->setStatusCode(200, "Good");
	}

	public function getAvailableICURooms()
	{
		$available_kamar = KamarRuangan::select(DB::raw('COUNT(kamarruangan_id) as jumlah_kamar_open, kelaspelayanan_m.kelaspelayanan_nama'))
			->leftJoin('kelaspelayanan_m', 'kelaspelayanan_m.kelaspelayanan_id', '=', 'kamarruangan_m.kelaspelayanan_id')
			->groupBy('kamarruangan_m.kelaspelayanan_id', 'kelaspelayanan_nama')
			->whereIn('keterangan_kamar', ['TERSEDIA', 'OPEN'])
			->where('kamarruangan_nokamar', 'like', '%ICU%')
			->orderBy('kamarruangan_m.kelaspelayanan_id')
			->get();

		return response()->json([
			'status' => 'Success',
			'res' => $available_kamar,
		])->setStatusCode(200, "Good");
	}
}
