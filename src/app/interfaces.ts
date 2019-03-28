export interface clientData {
  name: string;
  email: string;
  phoneNumber: number;
}
export interface RequestPollData {
  authorId: string;
  heading: string;
  detail: string;
  imageUrl: string;
}
export interface RequestPollResponseData {
  _id: string;
  status: boolean;
  comment: string;
}
export interface LoginData {
  phoneNumber: number;
  password: string;
}
export interface LoginToken {
  token: object;
}
