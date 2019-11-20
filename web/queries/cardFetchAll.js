const getSearchClause = (searchTerm) => (` title match  "*${searchTerm}*"`)

const getFilterClauses = (filterTypes) => {
  const mappedFilterTypes = filterTypes.map(filterType => `cardSection->section == "${filterType}" `);
  return `(${mappedFilterTypes.join(' || ')})`
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
  if (filterTypes && filterTypes.length > 0) {
    filterClauses.push(getFilterClauses(filterTypes))
  }
  const sortClause = `| order(title ${sortDir ? sortDir : 'asc'})`;
  const query =  `
  *[_type == "card" ${joinFilterClauses(filterClauses)}] ${sortClause} {
    "imageUrl": image.asset->url,
    cardType->,
    cardSection->,
    ...
  }
`
  return query;
}
