const Query = {
  dogs(parent, args, context, info) {
    return [{name: 'Snickers'}, {name: 'Zeus'}]
  }
};

module.exports = Query;
