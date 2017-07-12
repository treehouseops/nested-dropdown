import faker from 'faker'

export default function () {
  const items = []
  for(let i=0; i < 50; i++) {
    const parent = {
      id: i,
      title: faker.address.city() + ' - ' + faker.company.companyName() + ' - ' + faker.name.jobArea(),
      children: []
    }
    for(let i=0; i < 35; i++) {
      const child = {
        id: i,
        title: faker.commerce.department() + ' - ' + faker.name.jobTitle(),
        children: []
      }
      for(let i=0; i < 75; i++) {
        const grandchild = {
          id: i,
          title: faker.name.lastName() + ', ' + faker.name.firstName(),
          leaf: true
        }
        child.children.push(grandchild)
      }
      parent.children.push(child)
    }
    items.push(parent)
  }
  return items
}
