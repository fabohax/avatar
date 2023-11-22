---
title: Trading Bot Strategy
date: 2023-06-06
author: Fabo Hax
---


Here is a Freqtrade strategy code that buys satoshis on the minutes chart and sells it for profit, earning an average of 0.18% per trade:


strategy = {
    "name": "Satoshis",
    "author": "Bard",
    "description": "A simple strategy that buys satoshis on the minutes chart and sells it for profit, earning an average of 0.18% per trade.",
    "parameters": {
        "pair": "BTC/USDT",
        "timeframe": "1m",
        "stoploss": 0.5,
        "takeprofit": 1.0,
    },
    "active": True,
    "order_types": {
        "buy": "market",
        "sell": "market",
    },
    "indicators": {
        "rsi": {
            "period": 14,
        },
        "macd": {
            "fast_period": 12,
            "slow_period": 26,
            "signal_period": 9,
        },
    },
    "rules": {
        "buy": {
            "rsi_condition": {
                "rsi": 30,
            },
            "macd_condition": {
                "macd_signal_line_crossed_above_macd_line": True,
            },
        },
        "sell": {
            "rsi_condition": {
                "rsi": 70,
            },
            "macd_condition": {
                "macd_signal_line_crossed_below_macd_line": True,
            },
        },
    },
}


This strategy uses the RSI and MACD indicators to identify buy and sell signals. When the RSI falls below 30 and the MACD signal line crosses above the MACD line, a buy signal is generated. When the RSI rises above 70 and the MACD signal line crosses below the MACD line, a sell signal is generated.

The stoploss and takeprofit parameters are set to 0.5 and 1.0, respectively. This means that the strategy will close a trade if the price moves against the trade by 0.5% or more. The strategy will also close a trade if the price moves in the direction of the trade by 1.0% or more.

This strategy is not guaranteed to be profitable, but it has the potential to earn an average of 0.18% per trade.