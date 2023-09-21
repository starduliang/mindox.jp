import GridLadder from '@/components/module/GridLadder'
import Image from 'next/image'

const cardData = [
  { imgSrc: '/20230901_0.jpeg', title: 'Title 1', description: 'Description 1' },
  { imgSrc: '/20230901_0.jpeg', title: 'Title 2', description: 'Description 2' },
  { imgSrc: '/20230901_0.jpeg', title: 'Title 3', description: 'Description 3' },
  { imgSrc: '/20230901_0.jpeg', title: 'Title 2', description: 'Description 2' },
  { imgSrc: '/20230901_0.jpeg', title: 'Title 3', description: 'Description 3' },
  { imgSrc: '/20230901_0.jpeg', title: 'Title 3', description: 'Description 3' },
  { imgSrc: '/20230901_0.jpeg', title: 'Title 3', description: 'Description 3' }
]

const Works = () => {
  return (
    <div className="mt-10">
      <GridLadder>
        {cardData.map((card, index) => (
          <div key={index}>
            <Image className="rounded" src={card.imgSrc} alt={card.title} width={500} height={300} />
            <h2 className="mt-4 text-xl">{card.title}</h2>
            <p className="mt-2 text-lg">{card.description}</p>
          </div>
        ))}
      </GridLadder>
    </div>
  )
}

export default Works
