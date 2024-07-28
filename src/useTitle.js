import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/ge/products/overview':
                document.title = 'პროდუქტების მიმოხილვა | TBC Concept';
                break;
            case '/eng/products/overview':
                document.title = 'Overview | TBC Concept';
                break;
            case '/ge/products/kits':
                document.title = 'ნაკრები | TBC Concept';
                break;
            case '/eng/products/kits':
                document.title = 'Kits | TBC Concept';
                break;
            case '/ge/prdoucts/personalbanker':
                document.title = 'პირადი ბანკირი | TBC Concept';
                break;
            case '/eng/prdoucts/personalbanker':
                document.title = 'Private Banker | TBC Concept';
                break;
            case '/ge/lifestyle/overview':
                document.title = 'Concept Lifestyle | TBC Concept';
                break;
            case '/eng/lifestyle/overview':
                document.title = 'Overview | TBC Concept';
                break;
            case '/ge/lifestyle/offers':
                document.title = 'შეთავაზებები | TBC Concept';
                break;
            case '/eng/lifestyle/offers':
                document.title = 'Offers | TBC Concept';
                break;
            case '/ge/lifestyle/events':
                document.title = 'ღონისძიებები | TBC Concept';
                break;
            case '/eng/lifestyle/events':
                document.title = 'Events | TBC Concept';
                break;
            case '/ge/concept-space/overview':
                document.title = 'მიმოხილვა | TBC Concept';
                break;
            case '/eng/concept-space/overview':
                document.title = 'Overview | TBC Concept';
                break;
            case '/ge/concept-space/cafe':
                document.title = 'კაფე | TBC Concept';
                break;
            case '/eng/concept-space/cafe':
                document.title = 'Cafe | TBC Concept';
                break;
            case '/ge/concept-space/library':
                document.title = 'ბიბლიოთეკა | TBC Concept';
                break;
            case '/eng/concept-space/library':
                document.title = 'Library | TBC Concept';
                break;
            case '/ge/concept-space/concept-branches':
                document.title = 'კონცეპტ ფილიალები | TBC Concept';
                break;
            case '/eng/concept-space/concept-branches':
                document.title = 'TBC Concept Branches | TBC Concept';
                break;
            default:
                document.title = 'თიბისი კონცეპტი | TBC Concept';
                break;
        }
    }, [location]);
};
export default usePageTitle;