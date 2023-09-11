export interface Task {
 
    id: number;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  editing?: boolean; 
 
  editingDescription?: string; // Add this property
  editingStatus?: string; 
  }