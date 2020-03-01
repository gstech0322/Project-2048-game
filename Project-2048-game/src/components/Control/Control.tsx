import React, { FC } from 'react';
import { MAX_SCALE, MIN_SCALE } from '../../utils/constants';
import Box from '../Box';
import Button from '../Button';

import Text from '../Text';
export interface ControlProps {
  rows: number;
  cols: number;
  onReset: () => void;
  onChangeRow: (newRow: number) => void;
  onChangeCol: (newCol: number) => void;
}

const Control: FC<ControlProps> = ({
  rows,
  cols,
  onReset,
  onChangeRow,
  onChangeCol,
}) => (
  <Box inlineSize="100%" justifyContent="space-between">
    <Box flexDirection="column">
      <Box marginBlockEnd="s3">
        <button
          type="button"
          className="btn "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          comment jouer?
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  style={{ color: 'black' }}
                  id="exampleModalLabel"
                >
                  comment jouer?
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p
                  className="modal-title"
                  style={{ color: 'black' }}
                  id="exampleModalLabel"
                >
                  COMMENT JOUER ? Utilisez vos touches fléchées pour déplacer
                  les tuiles. Les tuiles avec le même numéro fusionnent en une
                  seule lorsqu'elles se touchent. Additionnez-les pour atteindre
                  2048 !
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Button onClick={onReset}>
        <Text fontSize={16} textTransform="capitalize">
          Nouveau jeu
        </Text>
      </Button>
    </Box>
    <Box>
      <Box marginInlineEnd="s5" flexDirection="column">
        <Text textTransform="uppercase" fontSize={13} color="primary">
          Nombre de tuiles
        </Text>
        <Box padding="s2">
          <Button
            mini
            onClick={() => {
              onChangeRow(-1);
              onChangeCol(-1);
              onReset();
            }}
            disable={rows === MIN_SCALE}
          >
            -
          </Button>
          <Box marginInline="s2">
            <Text fontSize={16} color="primary">
              {rows}
            </Text>
          </Box>
          <Button
            mini
            onClick={() => {
              onChangeRow(1);
              onChangeCol(1);
              onReset();
            }}
            disable={rows === MAX_SCALE}
          >
            +
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default React.memo(Control);
