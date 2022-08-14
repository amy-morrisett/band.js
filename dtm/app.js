var app = angular.module('app', ['ui.bootstrap']);
app.controller('AppController', function($scope) {

    $scope.tempo = 140;

    var conductor = new BandJS();

    conductor.setTimeSignature(4, 4);
    conductor.setTempo($scope.tempo);

    var soloist = conductor.createInstrument('square', 'oscillators'),
        soprano1 = conductor.createInstrument('square', 'oscillators'),
        soprano2 = conductor.createInstrument('square', 'oscillators'),
        alto1 = conductor.createInstrument('square', 'oscillators'),
        alto2 = conductor.createInstrument('triangle', 'oscillators'),
        drum = conductor.createInstrument('white', 'noises');
        //TODO: change this to a more snap/clap sounding instrument
        snappyPerc = conductor.createInstrument('white', 'noises');
        //TODO: change this to a louder, thumpier sounding instrument
        thumpPerc = conductor.createInstrument('white', 'noises');

    drum.setVolume(50);

    /**
     * Intro
     */
        // Bar 1
    soloist.rest('whole');

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'Db5', true);

    soprano2.note('whole', 'Bb4', true);

    alto1.note('dottedHalf', 'F4', true)
        .note('eighth', 'F4')
        .note('eighth', 'Gb4', true);
    
    alto2.rest('whole');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('whole');

    // Bar 2
    soloist.rest('whole');

    soprano1.note('whole', 'Db5');

    soprano2.note('whole', 'Bb4');

    alto1.note('whole', 'Gb4');
    
    alto2.rest('whole');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('whole');

    // Bar 3
    soloist.rest('whole');

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'C5', true);

    soprano2.note('whole', 'Gb4');

    alto1.note('dottedHalf', 'Ab4', true)
        .note('eighth', 'Ab4')
        .note('eighth', 'Db4', true);
    
    alto2.rest('whole');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('whole');

    // Bar 4
    soloist.rest('whole');

    soprano1.note('whole', 'C5');

    soprano2.note('whole', 'Ab4, F4');

    alto1.note('whole', 'Db4');
    
    alto2.rest('whole');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('whole');

    // Bar 5
    soloist.rest('whole');

    soprano1.note('half', 'C5, Bb4')
        .note('dottedQuarter', 'C5, Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4')
        .note('dottedQuarter', 'Ab4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Eb4')
        .note('dottedQuarter', 'F4')
        .note('eighth', 'Db4', true);
    
    alto2.rest('whole');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('whole');

    // Bar 6
    soloist.rest('whole');

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'Ab4', true)
        .note('half', 'Ab4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'Db4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');
    
    alto2.rest('whole');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('whole');

    // Bar 7
    soloist.rest('whole');

    soprano1.note('half', 'Bb4')
        .note('dottedQuarter', 'Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4, F4')
        .note('dottedQuarter', 'Gb4, F4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Db4')
        .note('dottedQuarter', 'Db4')
        .note('eighth', 'C4', true);
    
    alto2.rest('whole');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('whole');

    // Bar 8
    soloist.rest('whole');

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'A4', true)
        .note('half', 'A4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'C4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');
    
    alto2.rest('whole');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('whole');

    // Bar 9 -- first verse
    soloist.rest('dottedQuarter')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Ab3', true)

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'Db5', true);

    soprano2.note('whole', 'Bb4', true);

    alto1.note('dottedHalf', 'F4', true)
        .note('eighth', 'F4')
        .note('eighth', 'Gb4', true);

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 10
    soloist.note('eighth', 'Ab3')
        .note('quarter', 'Eb4')
        .note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .rest('quarter');
        
    soprano1.note('whole', 'Db5');

    soprano2.note('whole', 'Bb4');

    alto1.note('whole', 'Gb4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 11
    soloist.rest('dottedQuarter')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Ab3', true)

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'C5', true);

    soprano2.note('whole', 'Gb4');

    alto1.note('dottedHalf', 'Ab4', true)
        .note('eighth', 'Ab4')
        .note('eighth', 'Db4', true);

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 12
    soloist.note('eighth', 'Ab3')
        .note('quarter', 'Eb4')
        .note('eighth', 'F4')
        .note('eighth', 'Eb4')
        .note('eighth', 'Db4')
        .note('quarter', 'Eb4');

    soprano1.note('whole', 'C5');

    soprano2.note('whole', 'Ab4, F4');

    alto1.note('whole', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('eighth')
        .note('eighth')
        .rest('eighth')
        .note('eighth')

    // Bar 13
    soloist.note('eighth', 'Eb4')
        .note('sixteenth', 'C4')
        .note('sixteenth', 'Bb3')
        .note('eighth', 'Ab3')
        .rest('quarter')
        .note('quarter', 'F4')
        .note('eighth', 'Db4', true)

    soprano1.note('half', 'C5, Bb4')
        .note('dottedQuarter', 'C5, Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4')
        .note('dottedQuarter', 'Ab4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Eb4')
        .note('dottedQuarter', 'F4')
        .note('eighth', 'Db4', true);

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 14
    soloist.note('eighth', 'Db4')
        .rest('half')
        .note('quarter', 'Db4')
        .note('eighth', 'Db4', true)

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'Ab4', true)
        .note('half', 'Ab4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'Db4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 15
    soloist.note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('quarter', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4')

    soprano1.note('half', 'Bb4')
        .note('dottedQuarter', 'Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4, F4')
        .note('dottedQuarter', 'Gb4, F4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Db4')
        .note('dottedQuarter', 'Db4')
        .note('eighth', 'C4', true);

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 16
    soloist.note('dottedQuarter', 'C4')
        .note('eighth', 'Db4')
        .rest('half');

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'A4', true)
        .note('half', 'A4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'C4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 17
    soloist.rest('dottedQuarter')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Ab3', true)

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'Db5', true);

    soprano2.note('whole', 'Bb4', true);

    alto1.note('dottedHalf', 'F4', true)
        .note('eighth', 'F4')
        .note('eighth', 'Gb4', true);

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 18
    soloist.note('eighth', 'Ab3')
        .note('quarter', 'Eb4')
        .note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .rest('quarter');
        
    soprano1.note('whole', 'Db5');

    soprano2.note('whole', 'Bb4');

    alto1.note('whole', 'Gb4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 19
    soloist.rest('dottedQuarter')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Ab3', true)

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'C5', true);

    soprano2.note('whole', 'Gb4');

    alto1.note('dottedHalf', 'Ab4', true)
        .note('eighth', 'Ab4')
        .note('eighth', 'Db4', true);

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 20
    soloist.note('eighth', 'Ab3')
        .note('quarter', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4')
        .note('eighth', 'Eb4', true);

    soprano1.note('whole', 'C5');

    soprano2.note('whole', 'Ab4, F4');

    alto1.note('whole', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('eighth')
        .note('eighth')
        .rest('eighth')
        .note('eighth')

    // Bar 21
    soloist.note('eighth', 'Eb4')
        .note('sixteenth', 'C4')
        .note('sixteenth', 'Bb3')
        .note('eighth', 'Ab3')
        .rest('quarter')
        .note('quarter', 'F4')
        .note('eighth', 'F4', true);

    soprano1.note('half', 'C5, Bb4')
        .note('dottedQuarter', 'C5, Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4')
        .note('dottedQuarter', 'Ab4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Eb4')
        .note('dottedQuarter', 'F4')
        .note('eighth', 'Db4', true);

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 22
    soloist.note('eighth', 'F4')
        .note('eighth', 'Eb4')
        .note('eighth', 'F4')
        .note('quarter', 'Db4')
        .rest('quarter')
        .note('eighth', 'Db4', true);

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'Ab4', true)
        .note('half', 'Ab4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'Db4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 23
    soloist.note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    soprano1.note('half', 'Bb4')
        .note('dottedQuarter', 'Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4, F4')
        .note('dottedQuarter', 'Gb4, F4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Db4')
        .note('dottedQuarter', 'Db4')
        .note('eighth', 'C4', true);

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 24
    soloist.note('quarter', 'C4')
        .rest('eighth')
        .note('quarter', 'Db4')
        .note('quarter', 'Db4')
        .note('eighth', 'Ab4', true);

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'A4', true)
        .note('half', 'A4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'C4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

        // Bar 25 -- first chorus
        soloist.note('half', 'Ab4')
        .rest('eighth')
        .note('quarter', 'Ab4')
        .note('eighth', 'Ab4', true);

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'Db5', true);

    soprano2.note('whole', 'Bb4', true);

    alto1.note('dottedHalf', 'F4', true)
        .note('eighth', 'F4')
        .note('eighth', 'Gb4', true);
    
    alto2.note('dottedQuarter', 'Bb3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Bb3')
        .note('eighth', 'Db4')
        .rest('eighth')
        .note('eighth', 'Eb4', true);

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 26
    soloist.note('eighth', 'Ab4')
        .note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('eighth', 'Eb4')
        .note('eighth', 'Db4')
        .rest('eighth')
        .note('eighth', 'Ab4', true);

    soprano1.note('whole', 'Db5');

    soprano2.note('whole', 'Bb4');

    alto1.note('whole', 'Gb4');
    
    alto2.note('eighth', 'Eb4')
        .note('eighth', 'Eb4')
        .rest('eighth')
        .note('eighth', 'Db4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 27
    soloist.note('eighth', 'Ab4')
        .note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'C5', true);

    soprano2.note('whole', 'Gb4');

    alto1.note('dottedHalf', 'Ab4', true)
        .note('eighth', 'Ab4')
        .note('eighth', 'Db4', true);
    
    alto2.note('dottedQuarter', 'Ab3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Ab3')
        .rest('eighth')
        .note('eighth', 'Db4', true);

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 28
    soloist.note('quarter', 'Db4')
        .rest('half')
        .rest('eighth')
        .note('eighth', 'Ab4', true);

    soprano1.note('whole', 'C5');

    soprano2.note('whole', 'Ab4, F4');

    alto1.note('whole', 'Db4');
    
    alto2.note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .rest('eighth')
        .note('eighth', 'Ab3')
        .note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .note('eighth', 'Db4');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('eighth')
        .note('eighth')
        .rest('eighth')
        .note('eighth')

    // Bar 29
    soloist.note('eighth', 'Ab4')
        .note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Db4', true);

    soprano1.note('half', 'C5, Bb4')
        .note('dottedQuarter', 'C5, Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4')
        .note('dottedQuarter', 'Ab4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Eb4')
        .note('dottedQuarter', 'F4')
        .note('eighth', 'Db4', true);
    
    alto2.note('dottedQuarter', 'C4')
        .note('eighth', 'C4')
        .note('quarter', 'F4')
        .rest('eighth')
        .note('eighth', 'Bb3', true);

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 30
    soloist.note('eighth', 'Db4')
        .note('eighth', 'Bb3')
        .rest('eighth')
        .note('quarter', 'Db4')
        .note('eighth', 'Ab3')
        .rest('eighth')
        .note('eighth', 'Db4', true);

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'Ab4', true)
        .note('half', 'Ab4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'Db4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');
    
    alto2.note('eighth', 'Bb3')
        .note('quarter', 'C4')
        .note('eighth', 'Db4')
        .note('quarter', 'Ab3')
        .note('eighth', 'Db4')
        .note('eighth', 'Ab3');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 31
    soloist.note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    soprano1.note('half', 'Bb4')
        .note('dottedQuarter', 'Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4, F4')
        .note('dottedQuarter', 'Gb4, F4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Db4')
        .note('dottedQuarter', 'Db4')
        .note('eighth', 'C4', true);
    
    alto2.note('dottedQuarter', 'Gb3')
        .note('eighth', 'Gb3')
        .note('eighth', 'Gb3')
        .note('eighth', 'Gb3')
        .rest('eighth')
        .note('eighth', 'F3', true);

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 32
    soloist.note('quarter', 'C4')
        .rest('eighth')
        .note('quarter', 'Db4')
        .note('eighth', 'Bb4')
        .note('eighth', 'Gb4')
        .note('eighth', 'Ab4');

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'A4', true)
        .note('half', 'A4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'C4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');
    
    alto2.note('eighth', 'F3')
        .note('eighth', 'F3')
        .rest('eighth')
        .note('eighth', 'F3')
        .note('eighth', 'F3')
        .note('eighth', 'F3')
        .note('quarter', 'F3');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 33
    soloist.note('eighth', 'Ab4')
        .note('eighth', 'Gb4')
        .note('eighth', 'F4')
        .note('eighth', 'Eb4')
        .rest('eighth')
        .note('quarter', 'Ab4')
        .note('eighth', 'Ab4', true);

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'Db5', true);

    soprano2.note('whole', 'Bb4', true);

    alto1.note('dottedHalf', 'F4', true)
        .note('eighth', 'F4')
        .note('eighth', 'Gb4', true);
    
    alto2.note('dottedQuarter', 'Bb3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Bb3')
        .note('eighth', 'Db4')
        .rest('eighth')
        .note('eighth', 'Eb4', true);

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 34
    soloist.note('eighth', 'Ab4')
        .note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('eighth', 'Eb4')
        .note('eighth', 'Db4')
        .rest('eighth')
        .note('eighth', 'Ab4', true);

    soprano1.note('whole', 'Db5');

    soprano2.note('whole', 'Bb4');

    alto1.note('whole', 'Gb4');
    
    alto2.note('eighth', 'Eb4')
        .note('eighth', 'Eb4')
        .rest('eighth')
        .note('eighth', 'Db4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 35
    soloist.note('eighth', 'Ab4')
        .note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        .note('eighth', 'C5', true);

    soprano2.note('whole', 'Gb4');

    alto1.note('dottedHalf', 'Ab4', true)
        .note('eighth', 'Ab4')
        .note('eighth', 'Db4', true);
    
    alto2.note('dottedQuarter', 'Ab3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Ab3')
        .rest('eighth')
        .note('eighth', 'Db4', true);

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 36
    soloist.note('quarter', 'Db4')
        .rest('half')
        .rest('eighth')
        .note('eighth', 'Ab4', true);

    soprano1.note('whole', 'C5');

    soprano2.note('whole', 'Ab4, F4');

    alto1.note('whole', 'Db4');
    
    alto2.note('eighth', 'Db4')
        .note('eighth', 'Db4')
        .rest('eighth')
        .note('eighth', 'Ab3')
        .note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .note('eighth', 'Db4');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('eighth')
        .note('eighth')
        .rest('eighth')
        .note('eighth')

    // Bar 37
    soloist.note('eighth', 'Ab4')
        .note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Db4', true);

    soprano1.note('half', 'C5, Bb4')
        .note('dottedQuarter', 'C5, Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4')
        .note('dottedQuarter', 'Ab4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Eb4')
        .note('dottedQuarter', 'F4')
        .note('eighth', 'Db4', true);
    
    alto2.note('dottedQuarter', 'C4')
        .note('eighth', 'C4')
        .note('quarter', 'F4')
        .rest('eighth')
        .note('eighth', 'Bb3', true);

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 38
    soloist.note('eighth', 'Db4')
        .note('eighth', 'Bb3')
        .rest('eighth')
        .note('quarter', 'Db4')
        .note('eighth', 'Ab3')
        .rest('eighth')
        .note('eighth', 'Db4', true);

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'Ab4', true)
        .note('half', 'Ab4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'Db4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');
    
    alto2.note('eighth', 'Bb3')
        .note('quarter', 'C4')
        .note('eighth', 'Db4')
        .note('quarter', 'Ab3')
        .note('eighth', 'Db4')
        .note('eighth', 'Ab3');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 39
    soloist.note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    soprano1.note('half', 'Bb4')
        .note('dottedQuarter', 'Bb4')
        .note('eighth', 'Bb4', true);

    soprano2.note('half', 'Gb4, F4')
        .note('dottedQuarter', 'Gb4, F4')
        .note('eighth', 'F4', true);

    alto1.note('half', 'Db4')
        .note('dottedQuarter', 'Db4')
        .note('eighth', 'C4', true);
    
    alto2.note('dottedQuarter', 'Gb3')
        .note('eighth', 'Gb3')
        .note('eighth', 'Gb3')
        .note('eighth', 'Gb3')
        .rest('eighth')
        .note('eighth', 'F3', true);

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.note('quarter')
        .rest('eighth')
        .note('eighth')
        .rest('dottedQuarter')
        .note('eighth');

    // Bar 40
    soloist.note('dottedQuarter', 'C4')
        .note('eighth', 'Db4')
        .rest('half');

    soprano1.note('dottedQuarter', 'Bb4')
        .note('eighth', 'A4', true)
        .note('half', 'A4');

    soprano2.note('dottedQuarter', 'F4')
        .note('eighth', 'F4', true)
        .note('half', 'F4');

    alto1.note('dottedQuarter', 'C4')
        .note('eighth', 'Db4', true)
        .note('half', 'Db4');
    
    alto2.note('eighth', 'F3')
        .note('eighth', 'F3')
        .rest('eighth')
        .note('eighth', 'F3')
        .note('eighth', 'F3')
        .note('eighth', 'F3')
        .note('quarter', 'F3');

    drum.note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth')
        .note('eighth');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')






//     // MARIO BELOW
//     // Bar 9/17
//     rightHand.note('tripletHalf', 'G4, C4')
//         .note('tripletHalf', 'E5, G4')
//         .note('tripletHalf', 'G5, B4');

//     leftHand.note('tripletHalf', 'E3')
//         .note('tripletHalf', 'C4')
//         .note('tripletHalf', 'E4');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 10/18
//     rightHand.note('quarter', 'A5, C5')
//         .rest('quarter')
//         .note('quarter', 'F5, A4')
//         .note('quarter', 'G5, B4');

//     leftHand.note('quarter', 'F4')
//         .rest('quarter')
//         .note('quarter', 'D4')
//         .note('quarter', 'E4');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 11/19
//     rightHand.rest('quarter')
//         .note('quarter', 'E5, G4')
//         .rest('quarter')
//         .note('quarter', 'C5, E4');

//     leftHand.rest('quarter')
//         .note('quarter', 'C4')
//         .rest('quarter')
//         .note('quarter', 'A3');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 12/20
//     rightHand.note('quarter', 'D5, F4')
//         .note('quarter', 'B4, D4')
//         .rest('half');

//     // Repeat back to Bar 5
//     rightHand.repeat(1);

//     leftHand.note('quarter', 'B3')
//         .note('quarter', 'G3')
//         .rest('half');

//     // Repeat back to Bar 5
//     leftHand.repeat(1);

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     drum.repeat(1);

//     // Bar 21
//     rightHand.rest('half')
//         .note('quarter', 'G5, E5')
//         .note('quarter', 'Gb5, Eb5');

//     leftHand.note('quarter', 'C3')
//         .rest('quarter')
//         .rest('quarter')
//         .note('quarter', 'G3');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 22
//     rightHand.note('quarter', 'F5, D5')
//         .note('quarter', 'D#5, B4')
//         .rest('quarter')
//         .note('quarter', 'E5, C5');

//     leftHand.rest('half')
//         .note('quarter', 'C4')
//         .rest('quarter');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 23
//     rightHand.rest('quarter')
//         .note('quarter', 'G#4, E4')
//         .note('quarter', 'A4, F4')
//         .note('quarter', 'C5, A4');

//     leftHand.note('quarter', 'F3')
//         .rest('quarter')
//         .rest('quarter')
//         .note('quarter', 'C4');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 24
//     rightHand.rest('quarter')
//         .note('quarter', 'A4, C4')
//         .note('quarter', 'C5, E4')
//         .note('quarter', 'D5, F4');

//     leftHand.note('quarter', 'C4')
//         .rest('quarter')
//         .note('quarter', 'F3')
//         .rest('quarter');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 25
//     rightHand.rest('half')
//         .note('quarter', 'G5, E5')
//         .note('quarter', 'Gb5, Eb5');

//     leftHand.note('quarter', 'C3')
//         .rest('quarter')
//         .rest('quarter')
//         .note('quarter', 'E3');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 26
//     rightHand.note('quarter', 'F5, D5')
//         .note('quarter', 'D#5, B4')
//         .rest('quarter')
//         .note('quarter', 'E5, C5');

//     leftHand.rest('half')
//         .note('quarter', 'G3')
//         .note('quarter', 'C4');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 27
//     rightHand.rest('quarter')
//         .note('quarter', 'C6, G6, F6')
//         .rest('quarter')
//         .note('quarter', 'C6, G6, F6');

//     leftHand.rest('whole');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 28
//     rightHand.note('quarter', 'C6, G6, F6')
//         .rest('quarter')
//         .rest('half');

//     leftHand.rest('half')
//         .note('quarter', 'G3')
//         .rest('quarter');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 29
//     rightHand.rest('half')
//         .note('quarter', 'G5, E5')
//         .note('quarter', 'Gb5, Eb5');

//     leftHand.note('quarter', 'C3')
//         .rest('quarter')
//         .rest('quarter')
//         .note('quarter', 'G3');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 30
//     rightHand.note('quarter', 'F5, D5')
//         .note('quarter', 'D#5, B4')
//         .rest('quarter')
//         .note('quarter', 'E5, C5');

//     leftHand.rest('half')
//         .note('quarter', 'C4')
//         .rest('quarter');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 31
//     rightHand.rest('quarter')
//         .note('quarter', 'G#4, E4')
//         .note('quarter', 'A4, F4')
//         .note('quarter', 'C5, A4');

//     leftHand.note('quarter', 'F3')
//         .rest('quarter')
//         .rest('quarter')
//         .note('quarter', 'C4');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 32
//     rightHand.rest('quarter')
//         .note('quarter', 'A4, C4')
//         .note('quarter', 'C5, E4')
//         .note('quarter', 'D5, F4');

//     leftHand.note('quarter', 'C4')
//         .rest('quarter')
//         .note('quarter', 'F3')
//         .rest('quarter');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 33
//     rightHand.rest('half')
//         .note('quarter', 'Eb5, Ab4')
//         .rest('quarter');

//     leftHand.note('quarter', 'C3')
//         .rest('quarter')
//         .note('quarter', 'Ab3')
//         .rest('quarter');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 34
//     rightHand.rest('quarter')
//         .note('quarter', 'D5, F4')
//         .rest('half');

//     leftHand.rest('quarter')
//         .note('quarter', 'Bb3')
//         .rest('half');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 35
//     rightHand.note('quarter', 'C5, E4')
//         .rest('quarter')
//         .rest('half');

//     leftHand.note('quarter', 'C4')
//         .rest('quarter')
//         .rest('quarter')
//         .note('quarter', 'G3');

//     drum.note('eighth')
//         .rest('eighth')
//         .rest('quarter')
//         .note('tripletQuarter')
//         .rest('tripletQuarter')
//         .note('tripletQuarter');

//     // Bar 36
//     rightHand.rest('whole');

//     leftHand.note('quarter', 'G3')
//         .rest('quarter')
//         .note('quarter', 'C3')
//         .rest('quarter');

//     drum.rest('whole');

//     rightHand.repeatFromBeginning(5);
//     leftHand.repeatFromBeginning(5);
//     drum.repeatFromBeginning(5);

    var player = conductor.finish();

    $scope.playing = $scope.paused = $scope.muted = false;
    $scope.volume = 50;
    $scope.currentSeconds = 0;
    $scope.timeSlider = 0;
    $scope.totalSeconds = conductor.getTotalSeconds();

    var pauseTicker = false;

    conductor.setTickerCallback(function(seconds) {
        $scope.$apply(function() {
            if (! pauseTicker) {
                $scope.currentSeconds = seconds;
            }
        });
    });

    conductor.setOnFinishedCallback(function() {
        $scope.$apply(function() {
            $scope.playing = $scope.paused = false;
        });
    });

    conductor.setOnDurationChangeCallback(function() {
        $scope.totalSeconds = conductor.getTotalSeconds();
    });

    $scope.play = function() {
        $scope.playing = true;
        $scope.paused = false;
        player.play();
    };

    $scope.stop = function() {
        $scope.playing = $scope.paused = false;
        player.stop();
    };

    $scope.pause = function() {
        $scope.paused = true;
        player.pause();
    };

    $scope.updateTime = function() {
        pauseTicker = false;
        player.setTime($scope.currentSeconds);
    };

    $scope.updateTempo = function() {
        pauseTicker = false;
        conductor.setTempo($scope.tempo);
    };

    $scope.movingTime = function() {
        pauseTicker = true;
    };

    $scope.$watch('loop', function() {
        player.loop($scope.loop);
    });

    $scope.$watch('mute', function(newVal, oldVal) {
        if (newVal === oldVal) {
            return;
        }

        if ($scope.mute) {
            player.mute();
        } else {
            player.unmute();
        }
        $scope.muted = $scope.mute;
    });

    $scope.$watch('volume', function() {
        conductor.setMasterVolume($scope.volume / 100);
    });
});

app.filter('musicTime', function() {
    function pad ( num, size ) {
        return ( Math.pow( 10, size ) + ~~num ).toString().substring( 1 );
    }

    return function(seconds, showRemaining) {
        var duration = moment.duration(parseInt(seconds), 'seconds'),
            secs = duration.seconds(),
            mins = duration.minutes(),
            hrs = duration.hours();

        if (hrs > 0) {
            mins += (hrs * 60);
        }

        return mins + ':' + pad(secs, 2);
    }
});
