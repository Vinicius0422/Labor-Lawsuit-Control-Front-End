import { createBrowserRouter } from "react-router-dom";
import { Claimant } from './pages/claimant'
import { ClaimantDetail } from './pages/claimant/detail'
import { ClaimantFind } from './pages/claimant/find'
import { ClaimantSave } from './pages/claimant/save'
import { ClaimantUpdate } from './pages/claimant/update'
import { Defendant } from './pages/defendant'
import { DefendantDetail } from './pages/defendant/detail'
import { DefendantFind } from './pages/defendant/find'
import { DefendantSave } from './pages/defendant/save'
import { DefendantUpdate } from './pages/defendant/update'
import { Lawsuit } from './pages/lawsuit'
import { LawsuitDetail } from './pages/lawsuit/detail'
import { LawsuitFind } from './pages/lawsuit/find'
import { LawsuitSave } from './pages/lawsuit/save'
import { LawsuitUpdate } from './pages/lawsuit/update'
import { Login } from './pages/login'
import { Home } from './pages/home'

import { Layout } from './components/layout'

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/claimant",
        element: <Claimant/>
      },
      {
        path: "/claimant/:id",
        element: <ClaimantDetail/>
      },
      {
        path: "/claimant/save",
        element: <ClaimantSave/>
      },
      {
        path: "/claimant/update",
        element: <ClaimantUpdate/>
      },
      {
        path: "/claimant/find",
        element: <ClaimantFind/>
      },
      {
        path: "/defendant",
        element: <Defendant/>
      },
      {
        path: "/defendant/:id",
        element: <DefendantDetail/>
      },
      {
        path: "/defendant/save",
        element: <DefendantSave/>
      },
      {
        path: "/defendant/update",
        element: <DefendantUpdate/>
      },
      {
        path: "/defendant/find",
        element: <DefendantFind/>
      },
      {
        path: "/lawsuit",
        element: <Lawsuit/>
      },
      {
        path: "/lawsuit/:id",
        element: <LawsuitDetail/>
      },
      {
        path: "/lawsuit/save",
        element: <LawsuitSave/>
      },
      {
        path: "/lawsuit/update",
        element: <LawsuitUpdate/>
      },
      {
        path: "/lawsuit/find",
        element: <LawsuitFind/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  }
])

