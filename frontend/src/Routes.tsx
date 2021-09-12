import { Dashboard } from "pages/Dashboard"
import { Home } from "pages/Home"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}