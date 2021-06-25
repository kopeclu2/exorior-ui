import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    fileInput: {
        visibility: 'hidden',
        position: 'absolute',
        cursor: 'pointer',
    },
    fileInputLabel: {
        cursor: 'pointer',
    },
    relative: {
        position: 'relative',
    },
    avatar: {
        width: '150px',
        height: '50px',
    },
    cancelButton: {
        position: 'absolute',
        right: 0,
        zIndex: 100,
        transform: 'translate(12px, -12px)',
    },
    grayScale: {
        filter: 'grayscale(1)',
    },
}));
