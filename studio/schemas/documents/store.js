export default {
  name: 'store',
  type: 'document',
  title: 'Store',
  description: 'keeps track of some time shit',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string'
    },
    {
      title: 'Opening Hours',
      name: 'openingHours',
      type: 'dayAndTime'
    },
    {
      title: 'Storefront Image',
      name: 'storefrontImage',
      type: 'image',
      description: 'a nice image of your mom'
    }
  ]
}
