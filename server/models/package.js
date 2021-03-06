import bookshelf from '../bookshelf';

const Package = bookshelf.Model.extend({
  tableName: 'package'
});

export default Package;

export function insertPackages(data) {
  return Package.forge({
    shelter_id: data.shelter,
    users_id: data.user,
  }, { hasTimestamps: true }).save()
}

export function deliveryValidate(data) {
  return Package.query({
    where: {id: 2}
    }).save(
    { delivered_at: new Date().toISOString() },
    { method: 'update' }
  );
}