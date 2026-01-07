import { PipelineToolbar } from './Components/Organism/toolbar';
import { PipelineUI } from './Components/Page/ui';
import { SubmitButton } from './Components/Molecules/submit';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <ReactFlowProvider>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </ReactFlowProvider>
  );
}

export default App;
