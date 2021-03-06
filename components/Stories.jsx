const stories = [
  {
    name: 'Sonny Sangha',
    src: 'https://links.papareact.com/zof',
    profile: 'https://links.papareact.com/l4v',
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk'},
    {name: 'Jeft Bezoz',
    src: 'https://links.papareact.com/K2j',
    profile: 'https://links.papareact.com/f0p'},
    {name: 'Hark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf'},
    {name: 'BIll Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
]
import StoryCard from "../components/StoryCard"
function Stories() {
  return <div className="flex justify-content space-x-3 mx-auto">
      {stories.map((story)=>(
          <StoryCard key={story.src}name={story.name}src={story.src}profile={story.profile}/>
      ))}
  </div>
}
export default Stories
