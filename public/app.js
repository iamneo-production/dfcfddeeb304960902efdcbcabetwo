// JavaScript code for the Tic Tac Toe game logic goes here

// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
        [3, 4, 5],
            [6, 7, 8],
                [0, 3, 6],
                    // Add more winning conditions as needed
                    ];

                    // Function to handle player's move
                    function ticTacToe(btn, index) {
                        if (cells[index] === '' && !checkWinner()) {
                                cells[index] = currentPlayer;
                                        btn.value = currentPlayer;
                                                btn.disabled = true;
                                                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                                                result.textContent = `Player ${currentPlayer}'s Turn`;
                                                                        checkWinner();
                                                                            }
                                                                            }

                                                                            // Function to check for a winner
                                                                            function checkWinner() {
                                                                                for (let condition of conditions) {
                                                                                        const [a, b, c] = condition;
                                                                                                if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                                                                                                            result.textContent = `Player ${cells[a]} Wins!`;
                                                                                                                        btns.forEach(btn => (btn.disabled = true));
                                                                                                                                    return true;
                                                                                                                                            }
                                                                                                                                                }
                                                                                                                                                    if (!cells.includes('')) {
                                                                                                                                                            result.textContent = 'It\'s a Draw!';
                                                                                                                                                                    return true;
                                                                                                                                                                        }
                                                                                                                                                                            return false;
                                                                                                                                                                            }

                                                                                                                                                                            // Function to reset the game
                                                                                                                                                                            function resetGame() {
                                                                                                                                                                                cells = ['', '', '', '', '', '', '', '', ''];
                                                                                                                                                                                    currentPlayer = 'X';
                                                                                                                                                                                        btns.forEach(btn => {
                                                                                                                                                                                                btn.value = '';
                                                                                                                                                                                                        btn.disabled = false;
                                                                                                                                                                                                            });
                                                                                                                                                                                                                result.textContent = `Player ${currentPlayer}'s Turn`;
                                                                                                                                                                                                                }

                                                                                                                                                                                                                // Add event listeners for button clicks
                                                                                                                                                                                                                btns.forEach((btn, i) => {
                                                                                                                                                                                                                    btn.addEventListener('click', () => ticTacToe(btn, i));
                                                                                                                                                                                                                    });

                                                                                                                                                                                                                    document.querySelector('#reset').addEventListener('click', resetGame);