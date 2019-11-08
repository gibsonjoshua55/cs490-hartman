const getSearchClause = (searchTerm) => (` title match  "*${searchTerm}*"`)

const getFilterClauses = (filterTypes) => {
  return filterTypes.map(filterType => `cardType == '${filterType}' `);
}

const joinFilterClauses = (filterClauses) => {
  const statement = filterClauses.join(' && ');
  if (filterClauses.length > 0) {
    return `&& ${statement}`;
  }
  return statement;
}

export const cardFetchAll = (options) => {
  const {searchTerm, filterTypes, sortDir } = options;
  const filterClauses = [];
  if (searchTerm) {
    filterClauses.push(getSearchClause(searchTerm));
  }
  if (filterTypes && filterTypes > 0) {
    filterClauses.push(...getFilterClauses(filterTypes))
  }
  const sortClause = `| order(title ${sortDir ? sortDir : 'asc'})`;
  return `
  *[_type == "card" ${joinFilterClauses(filterClauses)}] ${sortClause} {
    "imageUrl": image.asset->url,
    cardType->,
    ...
  }
`
}
