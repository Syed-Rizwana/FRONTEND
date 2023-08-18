export interface Share1 {
  title: String;
  name: String;
  email: String;
  yourstory: String;
}
export interface Crud {
  name: String;
  email: String;
  Review: String;
  Ratings: Number
};
export interface UniqueConstraintError {
  errorNum: Number;
  offset: Number;
}
export interface InsertedSuccess {
  lastRowid: String;
  rowsAffected: Number;
}
export interface Read {
  Result: [];
}



