<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/task-list', [TaskController::class, 'index'])->name('task.list');
Route::post('/task-store', [TaskController::class, 'store'])->name('task.store');
Route::get('/task-complete/{id}', [TaskController::class, 'mark_complete'])->name('task.complete');
Route::get('/task-incomplete/{id}', [TaskController::class, 'mark_incomplete'])->name('task.incomplete');
Route::get('/task-delete/{id}', [TaskController::class, 'delete'])->name('task.delete');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
