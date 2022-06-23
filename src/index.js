export const range = (from, to) => new Proxy({}, {
  get: (_, property) => {
    if (property === "length") {
      return to - from;
    }

    const parsedProperty = Number(property);
    if (Number.isNaN(parsedProperty) === false) {
      const result = parsedProperty + from;
      return result < to ? result : undefined;
    }
  }
});
