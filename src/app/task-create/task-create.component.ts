import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  newTask: Task = {
    description: '',
    status: '',
    startDate: '',
    endDate: '',
    id: 0
  };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  submitForm(): void {
    this.taskService.createTask(this.newTask).subscribe({
      next: (response) => {
        console.log('Task created:', response);
        // Handle success if needed
        // Reset the form after successful submission
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating task:', error);
        // Handle error if needed
      }
    });
  }

  resetForm(): void {
    // Clear the form fields after submission
    this.newTask = {
      description: '',
      status: '',
      startDate: '',
      endDate: '',
      id:0
    };
  }
}