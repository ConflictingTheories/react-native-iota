
import { NativeModules } from 'react-native';
import { composeAPI } from '@iota/core';

import IotaUtils from '../IotaUtils'

const Iota = NativeModules.Iota;
const Utils = new IotaUtils();

export default class IotaSDK {

    iotaCore: any
    
    // settings:
    // {
    //     provider: 'http://localhost:9099'
    // }
    
    constructor(settings: any){
        this.iotaCore = composeAPI(settings);
    }


    testHash(): String {
        let result: String = Utils.testHash();
        return result;
    }

    generateHash(input: String): String {
        let result: String = Utils.generateHash(input);
        return result;
    }

    generateSeed(): String {
        const charset = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ9'];
        let seed = '';
        while (true) {
            if (seed.length == 81)
                break;
            let i = (Math.random() * 9999 % 27);
            seed += charset[i];
        }
        return seed;
    }

    addNeighbors(uris: any, callback: any) {
        this.iotaCore.addNeighbors(uris, callback)
    }

    attachToTangle(trunkTransaction: any, branchTransaction: any, minWeightMagnitude: any, trytes: any, callback: any) {
        this.iotaCore.attachToTangle(trunkTransaction, branchTransaction, minWeightMagnitude, trytes, callback);
    }

    broadcastBundle(tailTransactionHash: any, callback: any) {
        this.iotaCore.broadcastBundle(tailTransactionHash, callback)
    }

    broadcastTransactions(trytes: any, callback: any) {
        this.iotaCore.broadcastTransactions(trytes, callback)
    }

    checkConsistency(transactions: any, options: any, callback: any) {
        this.iotaCore.checkConsistency(transactions, options, callback)
    }

    findTransactionObjects(query: any, callback: any) {
        this.iotaCore.findTransactionObjects(query, callback)
    }

    findTransactions(query: any, callback: any) {
        this.iotaCore.findTransactions(query, callback)
    }

    getAccountData(seed: any, options: any, callback: any) {
        this.iotaCore.getAccountData(seed, options, callback)
    }

    getBalances(addresses: any, threshold: any, callback: any) {
        this.iotaCore.getBalances(addresses, threshold, callback)
    }

    getBundle(tailTransactionHash: any, callback: any) {
        this.iotaCore.getBundle(tailTransactionHash, callback)
    }

    getInclusionStates(transactions: any, tips: any, callback: any) {
        this.iotaCore.getInclusionStates(transactions, tips, callback)
    }

    getInputs(seed: any, options: any, callback: any) {
        this.iotaCore.getInputs(seed, options, callback)
    }

    getLatestInclusion(transactions: any, tips: any, callback: any) {
        this.iotaCore.getLatestInclusion(transactions, tips, callback)
    }

    getNeighbors(callback: any) {
        this.iotaCore.getNeighbors(callback)
    }

    getNewAddress(seed: any, options: any, callback: any) {
        this.iotaCore.getNewAddress(seed, options, callback)
    }

    getNodeInfo(callback: any) {
        this.iotaCore.getNodeInfo(callback)
    }

    getTips(callback: any) {
        this.iotaCore.getTips(callback)
    }

    getTransactionObjects(hashes: any, callback: any) {
        this.iotaCore.getTransactionObjects(hashes, callback)
    }

    getTransactionsToApprove(depth: any, reference: any, callback: any) {
        this.iotaCore.getTransactionsToApprove(depth, reference, callback)
    }

    getTrytes(hashes: any, callback: any) {
        this.iotaCore.getTrytes(hashes, callback)
    }

    isPromotable(tail: any, callback: any) {
        this.iotaCore.isPromotable(tail, callback)
    }

    prepareTransfers(seed: any, transfers: any, options: any, callback: any) {
        this.iotaCore.prepareTransfers(seed, transfers, options, callback)
    }

    promoteTransaction(tail: any, depth: any, minWeightMagnitude: any, transfer: any, options: any, callback: any) {
        this.iotaCore.promoteTransaction(tail, depth, minWeightMagnitude, transfer, options, callback)
    }

    removeNeighbors(uris: any, callback: any) {
        this.iotaCore.removeNeighbors(uris, callback)
    }

    replayBundle(tail: any, depth: any, minWeightMagnitude: any, callback: any) {
        this.iotaCore.replayBundle(tail, depth, minWeightMagnitude, callback)
    }

    sendTrytes(trytes: any, depth: any, minWeightMagnitude: any, reference: any, callback: any) {
        this.iotaCore.sendTrytes(trytes, depth, minWeightMagnitude, reference, callback)
    }

    storeAndBroadcast(trytes: any, callback: any) {
        this.iotaCore.storeAndBroadcast(trytes, callback)
    }

    storeTransactions(trytes: any, callback: any) {
        this.iotaCore.storeTransactions(trytes, callback)
    }

    traverseBundle(trunkTransaction: any, bundle: any, callback: any) {
        this.iotaCore.traverseBundle(trunkTransaction, bundle, callback)
    }

    generateAddress(seed: any, index: any, security: any, checksum: any) {
        this.iotaCore.generateAddress(seed, index, security, checksum)
    }
}