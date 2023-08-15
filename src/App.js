import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login/Login';
import Course from './CoursePage/Course';
import Home from './HomePage/Home';

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/login"
                element={<Login/>}/>

            <Route path='/course/:id'
                element={<Course/>}/>
            <Route path="/"
                element={<Home/>}/>
        </Routes>
    </BrowserRouter>);
}

export default App;
