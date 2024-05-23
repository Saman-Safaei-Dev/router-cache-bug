function toRegExp(items: string[]) {
  return items.map((item) => new RegExp(`^${item}$`));
}

export default toRegExp;
