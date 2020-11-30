import { getCurrDir } from '../hooks/useFS';

const LS = (fsStore): string => getCurrDir(fsStore).children.reduce((acc, curr) => `${acc} ${curr.name}`, '');

export default LS;
