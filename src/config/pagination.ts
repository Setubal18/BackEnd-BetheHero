export default function paginator(page: number, limit: number) {
  let paginate = {
    page: page && page > 0 ? page : 1,
    limit: limit && limit > 0 && limit < 500 ? limit : 500,
    offset: 0,
  };
  paginate.offset = (paginate.page - 1) * paginate.limit;
  return paginate;
}
