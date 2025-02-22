import './App.css'
function Home(){
    return (
        <section className='home-page'>
            <div className='welcome'>
                <div>
                    <h1 className='welcome-title'>Welcome To IMC</h1>
                    <div className='btn-container'><button className='join-btn'>Join us</button></div>
                    
                </div>
            </div>
            <div className='partners'>
                <div className='partner'>
                    
                </div>
                


            </div>
            <div className='about'>

                <div>
                    <img src="src\components\logo.png" alt="" />
                    <p>ISAMM MICROSOFT CLUB, Is your gateway to a world of technology, innovation, and career growth. We are a vibrant community of passionate tech enthusiasts and aspiring professionals dedicated to exploring the vast realm of Microsoft technologies. Through engaging workshops, exciting competitions, and personalized career development services, we offer services for learning, collaboration, and skill enhancement. Join us on this exciting journey where dreams transform into digital realities. Embrace the future of technology with ISAMM Microsoft Club where we are driven by passion!</p>
                </div>




            </div>
        </section>
    )
}

export default Home