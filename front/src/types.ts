// types.ts
export interface Event {
  id: number;
  date: string;
  description: string;
  title: string;
  countLikes: number;
  names: string[];
  registrationDisabled: boolean;
}

export interface ApiResponse {
  data: Event[];
}