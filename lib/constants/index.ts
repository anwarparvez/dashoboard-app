export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Dashboard App";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern store built with Next.js, ShadCN, and Prisma.";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "admin@example.com",
  password: "123456",
};

export const signUpDefaultValues = {
  name: "Steve Smith",
  email: "steve@example.com",
  password: "password",
  confirmPassword: "password",
};


export const eKycDefaultValues = {
  simType: "prepaid",
  applicationType: "new",
  fullName: "",
  fatherName: "",
  motherName: "",
  dateOfBirth: "",
  gender: "male",
  nidNumber: "",
  mobileNumber: "",
  email: "",
  permanentAddress: "",
  presentAddress: "",
  biometricVerified: false,
  fingerprintCaptured: false,
  photoCaptured: false,
  declarationAccepted: false,
}

export const applyDefaultValues = {
  fullName: "John Doe",
  email: "parvez.uz@gmail.com",
  mobile: "+8801XXXXXXXXX",

  nidNumber: "1234567890",

  ottProvider: "Chorki",

  needsGpon: false,
  district: "Dhaka",
  thana: "Moghbazar",
  address: "Moghbazar, Dhaka, Bangladesh",
};
