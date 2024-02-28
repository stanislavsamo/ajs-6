export default function orderByProps(obj, arrOrderProps) {
  const arrObjProps = Object.entries(obj)
      .map(([key, value]) => ({ key, value }))
      .sort((a, b) => a.key.localeCompare(b.key));

  if (arrOrderProps) {
      for (const prop of arrOrderProps.reverse()) {
          if (!obj[prop]) {
              throw new Error(
                  `Сортировка не возможна, свойство ${prop} не существует!`,
              );
          }

          const index = arrObjProps.findIndex((el) => el.key === prop);
          const [removed] = arrObjProps.splice(index, 1);
          arrObjProps.unshift(removed);
      }
  }
  return arrObjProps;
}
