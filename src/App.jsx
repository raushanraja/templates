import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

import ThemeSelector from './components/Theme/selector.jsx';


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeSelector />
        </QueryClientProvider>
    );
}
export default App;
