
interface User {
    type: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    country: string;
    state: string;
    district: string;
    IEC: string;
    GST: string;
  }

export interface CheckUser {
    email: string;
    password: string;
  }
  
  export default User;
  