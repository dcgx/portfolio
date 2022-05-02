const featuredProjects = [
  {
    id: '001',
    slug: 'ambar-pet',
    title: 'Ambar.pet',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    categories: ['Web App Development'],
    techs: ['vue', 'vuex', 'bootstrap'],
    image: '/ambar-pet.png'
  }
]

export default function handler(req, res) {
  res.status(200).json(featuredProjects)
}
