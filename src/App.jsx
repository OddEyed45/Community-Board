import './App.css'
import Card from './Card'

const App = () => {

  return (
    <>
      <div className='App'>
        <img className='image' src=".\src\assets\awning.png"/>
        <h1 className='title'>NYC's Food Truck Favorites</h1>
        <div className='cards'>
          <Card name="Birria Landia" cuisine="Mexican" link=".\src\assets\birria-landia.jpeg"></Card>
          <Card name="NY Dosas" cuisine="Indian" link=".\src\assets\ny-dosas.jpg"></Card>
          <Card name="Mom's Momos" cuisine="Tibetan/Nepali" link=".\src\assets\moms-momos.png"></Card>
          <Card name="Disos Italian Sandwich Society" cuisine="Italian" link=".\src\assets\disos.jpg"></Card>
          <Card name="King Souvlaki" cuisine="Greek" link=".\src\assets\king-souvlaki.png"></Card>
          <Card name="Chilo's" cuisine="Cocktails/Mexican" link=".\src\assets\chilos.jpg"></Card>
          <Card name="King of Falafal" cuisine="Middle Eastern" link=".\src\assets\king-of-falafel.jpg"></Card>
          <Card name="The Halal Guys" cuisine="Middle Eastern" link=".\src\assets\the-halal-guys.jpg"></Card>
          <Card name="Wafels and Dinges" cuisine="Belgian" link=".\src\assets\wafels.png"></Card>
          <Card name="El Rey del Taco" cuisine="Mexican" link=".\src\assets\el-rey-del-taco.jpg"></Card>
        </div>
      </div>
    </>
  )
}

export default App
