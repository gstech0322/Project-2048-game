import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useInterval } from 'react-interval-hook';

import Box from '../components/Box';
import Control from '../components/Control/Control';
import GameBoard from '../components/GameBoard';
import ScoreBoard from '../components/ScoreBoard';
import Switch from '../components/Switch';
import Text from '../components/Text';
import useGameBoard from '../hooks/useGameBoard';
import useGameScore from '../hooks/useGameScore';
import useGameState, { GameStatus } from '../hooks/useGameState';
import useScaleControl from '../hooks/useScaleControl';
import { GRID_SIZE, MIN_SCALE, SPACING } from '../utils/constants';
import useLocalStorage from '../hooks/useLocalStorage';
import { ThemeName } from '../themes/types';
import useTheme from '../hooks/useTheme';
import Notification from '../components/Notification';

export type Configuration = {
  theme: ThemeName;
  bestScore: number;
  rows: number;
  cols: number;
};

const APP_NAME = 'react-2048';

const App: FC = () => {
  const [{ status: gameStatus, pause }, setGameStatus] = useGameState({
    status: 'running',
    pause: false,
  });

  const [config, setConfig] = useLocalStorage<Configuration>(APP_NAME, {
    theme: 'default',
    bestScore: 0,
    rows: MIN_SCALE,
    cols: MIN_SCALE,
  });

  const [{ name: themeName, value: themeValue }, setTheme] = useTheme(
    config.theme,
  );

  const [rows, setRows] = useScaleControl(config.rows);
  const [cols, setCols] = useScaleControl(config.cols);

  const { total, best, addScore, setTotal } = useGameScore(config.bestScore);

  const { tiles, onMove, onMovePending } = useGameBoard({
    rows,
    cols,
    pause,
    gameStatus,
    setGameStatus,
    addScore,
  });

  const onResetGame = useCallback(() => {
    setGameStatus('restart');
  }, [setGameStatus]);

  const onCloseNotification = useCallback(
    (currentStatus: GameStatus) => {
      setGameStatus(currentStatus === 'win' ? 'continue' : 'restart');
    },
    [setGameStatus],
  );
  // SetScore
  // SetScore
  // SetScore

  useEffect(() => {
    if (total >= 2048) {
      setGameStatus('win');
    }
  }, [total, setTotal]);
  useEffect(() => {
    if (gameStatus === 'restart') setTotal(0);
  }, [gameStatus, setTotal]);

  useEffect(() => {
    setConfig({ rows, cols, bestScore: best, theme: themeName });
  }, [rows, cols, best, themeName, setConfig]);

  return (
    <ThemeProvider theme={themeValue}>
      <Box
        justifyContent="center"
        inlineSize="100%"
        blockSize="100%"
        alignItems="start"
        borderRadius={0}
      >
        <Box
          justifyContent="center"
          flexDirection="column"
          inlineSize={`${GRID_SIZE}px`}
        >
          <Box
            inlineSize="100%"
            marginBlockStart="s10"
            justifyContent="space-between"
          >
            <Box>
              <Text fontSize={49} fontWeight="bold" color="tile32">
                2048
              </Text>
            </Box>
            <Box justifyContent="center">
              <ScoreBoard total={total} title="Votre score" />
              <ScoreBoard total={best} title="Meilleur score" />
            </Box>
          </Box>
          <Box marginBlockStart="s3" marginBlockEnd="s6" inlineSize="100%">
            <Control
              rows={rows}
              cols={cols}
              onReset={onResetGame}
              onChangeRow={setRows}
              onChangeCol={setCols}
            />
          </Box>
          <GameBoard
            tiles={tiles}
            boardSize={GRID_SIZE}
            rows={rows}
            cols={cols}
            spacing={SPACING}
            gameStatus={gameStatus}
            onMove={onMove}
            onMovePending={onMovePending}
            onCloseNotification={onCloseNotification}
          />
          <Box marginBlock="s4" justifyContent="center" flexDirection="column">
            {/* <Text fontSize={16} as="p" color="primary">
              Play with arrow keys
            </Text> */}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
