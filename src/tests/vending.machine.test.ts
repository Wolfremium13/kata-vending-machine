import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VendingMachine } from '../core/vending.machine';
import { CoinReader } from '../core/interfaces/coin.reader';
import { CoinReturner } from '../core/interfaces/coin.return';
import { Displayable } from '../core/interfaces/displayable';
import { UnknownCoin } from '../core/coin/unknown.coin';
import { CoinSize } from '../core/coin/coin.size';
import { CoinWeight } from '../core/coin/coin.weight';

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
			const coinSize = CoinSize.from(1).getRight();
			const coinWeight = CoinWeight.from(1).getRight();
			const penny = new UnknownCoin(coinSize, coinWeight);
			coinReader.read = vi.fn(() => penny);
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();

			expect(coinReturner.return).toHaveBeenCalledWith(penny);
		});

		it('display insert coin when no coins inserted', () => {
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();

			expect(displayable.displayInsertCoin).toHaveBeenCalled();
		});

		it('display balance when coins inserted', () => {
			const nickel = new UnknownCoin(CoinSize.nickel(), CoinWeight.nickel());
			coinReader.read = vi.fn(() => nickel);
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();
			vendingMachine.insertCoin();

			expect(displayable.displayBalance).toHaveBeenCalledWith(0.1);
		});
	});
});
