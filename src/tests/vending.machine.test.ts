import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VendingMachine } from '../core/vending.machine';
import { CoinReader } from '../core/interfaces/coin.reader';
import { CoinReturner } from '../core/interfaces/coin.return';
import { Displayable } from '../core/interfaces/displayable';
import { UnknownCoin } from '../core/coin/coins/unknown';
import { Nickel } from '../core/coin/coins/nickel';
import { CoinParams } from '../core/coin/coin.params';
import { Dime } from '../core/coin/coins/dime';
import { Quarter } from '../core/coin/coins/quarter';

describe('Vending machine should', () => {
	let coinReader: CoinReader;
	let coinReturner: CoinReturner;
	let displayable: Displayable;

	beforeEach(() => {
		coinReader = {
			read: vi.fn(),
		};
		coinReturner = {
			return: vi.fn(),
		};
		displayable = {
			displayInsertCoin: vi.fn(),
			displayBalance: vi.fn(),
		};
	});

	describe('when insert coins', () => {
		it('give back invalid coins', () => {
			const invalidCoin = new UnknownCoin();
			coinReader.read = vi.fn(() => new CoinParams(invalidCoin.sizeInMillimeters(), invalidCoin.weightInGrams()));
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();

			expect(coinReturner.return).toHaveBeenCalled();
		});

		it('display insert coin when no coins inserted', () => {
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();

			expect(displayable.displayInsertCoin).toHaveBeenCalled();
		});

		it.each([
			{
				coin: new Nickel(),
				expectedBalance: 0.05,
			},
			{
				coin: new Dime(),
				expectedBalance: 0.1,
			},
			{
				coin: new Quarter(),
				expectedBalance: 0.25,
			},
		])('display balance when valid coin is inserted', ({ coin, expectedBalance }) => {
			coinReader.read = vi.fn(() => new CoinParams(coin.sizeInMillimeters(), coin.weightInGrams()));
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();
			vendingMachine.insertCoin();

			expect(displayable.displayBalance).toHaveBeenCalledWith(expectedBalance * 2);
		});
	});
});
