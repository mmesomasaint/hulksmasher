export type ReviewType = {
  imgSrc: string
  name: string
  role: string
  star: number
  said: string
}

const Reviews: ReviewType[] = [
  {
    imgSrc: '/asset-tailors.jpg',
    name: 'Armani Kay',
    role: 'Shopkeeper',
    star: 4,
    said: 'Working with [company] has been a great success. They treat and loop you in through every process of the design',
  },
  {
    imgSrc: '/asset-tailors.jpg',
    name: 'Jules Brown',
    role: 'Project Manager',
    star: 4,
    said: 'Working with [company] has been a great success. They treat and loop you in through every process of the design',
  },
  {
    imgSrc: '/asset-tailors.jpg',
    name: 'Dr. Arnold Eze',
    role: 'Lecturer, Dept Fine Arts',
    star: 4,
    said: 'Working with [company] has been a great success. They treat and loop you in through every process of the design',
  },
  {
    imgSrc: '/asset-tailors.jpg',
    name: 'Pharm Kingsley Oti',
    role: 'Lecturer, Dept of Pharmacy',
    star: 4,
    said: 'Working with [company] has been a great success. They treat and loop you in through every process of the design',
  },
]

export default Reviews
