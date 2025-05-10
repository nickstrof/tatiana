import { useState, useEffect, useRef } from 'react';
import { images } from '../../constants';
import './DinoGame.css';

const DinoGame = () => {
	const [isJumping, setIsJumping] = useState(false);
	const [obstacles, setObstacles] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);
	const obstacleId = useRef(0);
	const dinoRef = useRef(null);

	const handleJump = () => {
		if (!isJumping && !gameOver) {
		setIsJumping(true);
		setTimeout(() => {
			setIsJumping(false);
		}, 500);
		}
	};

	const restartGame = () => {
		setIsJumping(false);
		setObstacles([]);
		setScore(0);
		setGameOver(false);
		obstacleId.current = 0;
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
		if (e.code === 'Space') {
			e.preventDefault();
			handleJump();
		}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isJumping, gameOver]);

	useEffect(() => {
		if (gameOver) return;

		const interval = setInterval(() => {
		const id = obstacleId.current++;
		setObstacles((prev) => [...prev, { id }]);
		}, 2000);

		return () => clearInterval(interval);
	}, [gameOver]);

	useEffect(() => {
		if (gameOver) return;

		const checkCollision = () => {
		const dino = dinoRef.current;
		obstacles.forEach((obstacle) => {
			const obstacleElement = document.getElementById(`obstacle-${obstacle.id}`);
			if (!obstacleElement) return;

			const dinoRect = dino.getBoundingClientRect();
			const obstacleRect = obstacleElement.getBoundingClientRect();

			if (
			dinoRect.left < obstacleRect.right &&
			dinoRect.right > obstacleRect.left &&
			dinoRect.bottom > obstacleRect.top &&
			dinoRect.top < obstacleRect.bottom
			) {
			setGameOver(true);
			}
		});
		};

		const collisionInterval = setInterval(checkCollision, 50);

		return () => clearInterval(collisionInterval);
	}, [obstacles, gameOver]);

	const removeObstacle = (id) => {
		setObstacles((prev) => prev.filter((obs) => obs.id !== id));
		if (!gameOver) {
		setScore((prev) => prev + 1);
		}
	};

  	return (
    	<div className="game-container" onClick={handleJump}>
      		<div className="ground"></div>
			<img
				ref={dinoRef}
				src={images.tatianaweb}
				alt="Dino Tatiana"
				className={`dino ${isJumping ? 'jump' : ''}`}
			/>
			{obstacles.map((obs) => (
				<svg 
					width="50" 
					height="50"
					key={obs.id}
					id={`obstacle-${obs.id}`}
					className="obstacle"
					onAnimationEnd={() => removeObstacle(obs.id)}
				>
					<use xlinkHref="#icon-cactus" />
				</svg>
				// <div
				// 	key={obs.id}
				// 	id={`obstacle-${obs.id}`}
				// 	className="obstacle"
				// 	onAnimationEnd={() => removeObstacle(obs.id)}
				// />
			))}
			{gameOver && (
				<div className="game-over">
					<div>Game Over! Score: {score}</div>
				<button className="restart-btn" onClick={restartGame}>Restart</button>
				</div>
			)}
			{!gameOver && <div className="score">Score: {score}</div>}
		</div>
 	);
};

export default DinoGame;