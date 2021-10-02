<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allData = Task::latest()->get();
		return response()->json([
		'allData' => $allData
		]); 
    }

    public function mark_complete($id)
    {
        $data = Task::find($id);
        $data->status = 1;
        $update = $data->update();
        if($update)
        {   
            $allData = Task::latest()->get();
            $message="Task moved to complete sccuessfully.";
            $status = 1;
           
        }
        else
        {
            $message="Unable to move task to complete,please try again.";
            $status = 0;
             
        }
        
        $allData = Task::latest()->get();
		
        return response()->json([
            'message' => $message,
            'status' => $status,
            'allData' => $allData
        ]);
    }

    public function mark_incomplete($id)
    {
        $data = Task::find($id);
        $data->status = 0;
        $update = $data->update();
        if($update)
        {   
            $allData = Task::latest()->get();
            $message="Task moved to incomplete sccuessfully.";
            $status = 1;
           
        }
        else
        {
            $message="Unable to move task to incomplete,please try again.";
            $status = 0;
             
        }
        
        $allData = Task::latest()->get();
		
        return response()->json([
            'message' => $message,
            'status' => $status,
            'allData' => $allData
        ]);
    }

    public function delete($id)
    {
        $data = Task::find($id);
        $delete = $data->delete();
        
        if($delete)
        {   
            
            $message="Task deleted sccuessfully.";
            $status = 1;
           
        }
        else
        {
            $message="Unable to delete task,please try again.";
            $status = 0;
             
        }
        
        $allData = Task::latest()->get();
        
        return response()->json([
            'message' => $message,
            'status' => $status,
            'allData' => $allData
        ]);
		
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
        $data = new Task();
        $data->task = $request->task;
        $data->status = $request->status;
        $save = $data->save();
        
        if($save)
        {
            $message="Task created successfully.";
            $status = 1;
            
        }
        else
        {
            $message="Unable to create task,please try again.";
            $status = 0;
            
        }

        $allData = Task::latest()->get();
        
        return response()->json([
            'message' => $message,
            'status' => $status,
            'allData' => $allData
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        //
    }
}
