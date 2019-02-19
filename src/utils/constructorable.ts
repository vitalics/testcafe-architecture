
export function isConstructorable<I>(ctorLike: I): boolean {
  try {
    Reflect.construct(String, [], ctorLike);
  }
  catch{
    return false;
  }
  return true;
}
