import ImageSlider from 'react-image-comparison-slider'

function App() {
  return (
    <div style={{ width: 700, height: 450 }}>
      <ImageSlider
        image1="https://images.pexels.com/photos/4474767/pexels-photo-4474767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt1=""
        image2="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt2=""
        sliderColor="white"
        handleColor="white"
        handleBackgroundColor="black"
      />
    </div>
  )
}

export default App
