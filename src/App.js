import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/login/Login';
import Course from './Components/CoursePage/Course';
import Home from './Components/HomePage/Home';

function App() {
    return(<BrowserRouter>
        <Routes>
            <Route path="/login"
                element={< Login/>}/>

            <Route path='/Course/:id'
                element={<Course/>}/>
            <Route path="/"
                element={<Home/>}/>
        </Routes>
    </BrowserRouter>);
}

export default App;
