import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

import ThemeSelector from './components/Theme/selector.jsx';


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1 className='font-roboto'>React Query Demo</h1>
        </QueryClientProvider>
    );
}
export default App;
