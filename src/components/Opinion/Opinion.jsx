import './Opinion.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
function OneOpinion({ item }) {
	const indexNum = item.created_time.indexOf('T');
	const date = item.created_time.substring(0, indexNum);
	const finishDate = date.split('-');
	switch (finishDate[1]) {
		case '01':
			finishDate[1] = 'Styczeń';
			break;
		case '02':
			finishDate[1] = 'Luty';
			break;
		case '03':
			finishDate[1] = 'Marzec';
			break;
		case '04':
			finishDate[1] = 'Kwiecień';
			break;
		case '05':
			finishDate[1] = 'Maj';
			break;
		case '06':
			finishDate[1] = 'Czerwiec';
			break;
		case '07':
			finishDate[1] = 'Lipiec';
			break;
		case '08':
			finishDate[1] = 'Sierpień';
			break;
		case '09':
			finishDate[1] = 'Wrzesień';
			break;
		case '10':
			finishDate[1] = 'Październik';
			break;
		case '11':
			finishDate[1] = 'Listopad';
			break;
		case '12':
			finishDate[1] = 'Grudzień';
			break;
	}
	return (
		<Card
			style={{
				height: '100%',
				width: '100%',
				backgroundColor: 'transparent',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<CardHeader title="Użytkownik facebooka" subheader={`${finishDate[1]}, ${finishDate[0]}`} />
			<CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
				<Typography gutterBottom variant="body1" component="q">
					{item.review_text}
				</Typography>
				<Typography
					component="div"
					variant="body2"
					color="text.secondary"
					style={{ display: 'flex', justifyContent: 'center' }}>
					{item.recommendation_type === 'positive' ? (
						<Stack spacing={1}>
							<Rating name="half-rating-read" defaultValue={5} readOnly />
						</Stack>
					) : (
						''
					)}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default OneOpinion;
