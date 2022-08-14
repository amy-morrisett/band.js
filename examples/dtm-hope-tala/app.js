let app = angular.module('app', ['ui.bootstrap']);
app.controller('AppController', function($scope) {

    $scope.tempo = 140;

    let conductor = new BandJS();

    conductor.setTimeSignature(4, 4);
    conductor.setTempo($scope.tempo);

    let soloist = conductor.createInstrument('square', 'oscillators'),
        soprano1 = conductor.createInstrument('square', 'oscillators'),
        soprano2 = conductor.createInstrument('square', 'oscillators'),
        alto1 = conductor.createInstrument('square', 'oscillators'),
        alto2 = conductor.createInstrument('sawtooth', 'oscillators'),
        drum = conductor.createInstrument('white', 'noises');
        snappyPerc = conductor.createInstrument('white', 'noises');
        thumpPerc = conductor.createInstrument('white', 'noises');
    
    console.log(soloist)

    soloist.setVolume(75);
    soprano1.setVolume(25);
    soprano2.setVolume(25);
    alto1.setVolume(25);
    alto2.setVolume(100);
    drum.setVolume(25);
    snappyPerc.setVolume(40);
    thumpPerc.setVolume(40);
    
    /**
     * Intro
     */
        // Bar 1
    soloist.rest('whole');

    soprano1.note('half', 'Db5')
        .note('dottedQuarter', 'Eb5')
        // note below includes part of bar 2
        .note('wholeTiedToEighth', 'Db5');

    // note below includes part of bar 2
    soprano2.note('breve', 'Bb4');

    alto1.note('dottedHalfTiedToEighth', 'F4')
        // note below includes part of bar 2
        .note('wholeTiedToEighth', 'Gb4');
    
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

    // soprano1.note('whole', 'Db5');

    // soprano2.note('whole', 'Bb4');

    // alto1.note('whole', 'Gb4');
    
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
        // note below includes part of bar 4
        .note('wholeTiedToEighth', 'C5');

    soprano2.note('whole', 'Gb4');

    alto1.note('dottedHalfTiedToEighth', 'Ab4')
        // note below includes part of bar 4
        .note('wholeTiedToEighth', 'Db4');
    
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

    // soprano1.note('whole', 'C5');

    soprano2.note('whole', 'Ab4, F4');

    // alto1.note('whole', 'Db4');
    
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
        // note below includes part of bar 6
        .note('half', 'Bb4');

    soprano2.note('half', 'Gb4')
        .note('dottedQuarter', 'Ab4')
        // note below includes part of bar 6
        .note('half', 'F4');

    alto1.note('half', 'Eb4')
        .note('dottedQuarter', 'F4')
        // note below includes part of bar 6
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

    // Bar 6
    soloist.rest('whole');

    // soprano1.note('dottedQuarter', 'Bb4')
    soprano1.note('halfTiedToEighth', 'Ab4');

    // soprano2.note('dottedQuarter', 'F4')
    soprano2.note('halfTiedToEighth', 'F4');

    // alto1.note('dottedQuarter', 'Db4')
    alto1.note('halfTiedToEighth', 'Db4');
    
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
        // note below includes part of bar 8
        .note('half', 'Bb4');

    soprano2.note('half', 'Gb4, F4')
        .note('dottedQuarter', 'Gb4, F4')
        // note below includes part of bar 8
        .note('half', 'F4');

    alto1.note('half', 'Db4')
        .note('dottedQuarter', 'Db4')
        // note below includes part of bar 8
        .note('half', 'C4');
    
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

    // soprano1.note('dottedQuarter', 'Bb4')
    soprano1.note('halfTiedToEighth', 'A4');

    soprano1.repeat(4);

    // soprano2.note('dottedQuarter', 'F4')
    soprano2.note('halfTiedToEighth', 'F4');
    
    soprano2.repeat(4);

    // alto1.note('dottedQuarter', 'C4')
    alto1.note('halfTiedToEighth', 'Db4');
    
    alto1.repeat(4);
    
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
        // note below includes part of bar 10
        .note('quarter', 'Ab3');

    // soprano1.note('half', 'Db5')
    //     .note('dottedQuarter', 'Eb5')
    //     .note('eighth', 'Db5', true);

    // soprano2.note('whole', 'Bb4', true);

    // alto1.note('dottedHalf', 'F4', true)
    //     .note('eighth', 'F4')
    //     .note('eighth', 'Gb4', true);

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
    // soloist.note('eighth', 'Ab3')
    soloist.note('quarter', 'Eb4')
        .note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .rest('quarter');
        
    // soprano1.note('whole', 'Db5');

    // soprano2.note('whole', 'Bb4');

    // alto1.note('whole', 'Gb4');

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
        // note below includes part of bar 12
        .note('quarter', 'Ab3');

    // soprano1.note('half', 'Db5')
    //     .note('dottedQuarter', 'Eb5')
    //     .note('eighth', 'C5', true);

    // soprano2.note('whole', 'Gb4');

    // alto1.note('dottedHalf', 'Ab4', true)
    //     .note('eighth', 'Ab4')
    //     .note('eighth', 'Db4', true);

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
    // soloist.note('eighth', 'Ab3')
    soloist.note('quarter', 'Eb4')
        .note('eighth', 'F4')
        .note('eighth', 'Eb4')
        .note('eighth', 'Db4')
        .note('quarter', 'Eb4');

    // soprano1.note('whole', 'C5');

    // soprano2.note('whole', 'Ab4, F4');

    // alto1.note('whole', 'Db4');

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
        // note below includes part of bar 14
        .note('quarter', 'Db4');

    // soprano1.note('half', 'C5, Bb4')
    //     .note('dottedQuarter', 'C5, Bb4')
    //     .note('eighth', 'Bb4', true);

    // soprano2.note('half', 'Gb4')
    //     .note('dottedQuarter', 'Ab4')
    //     .note('eighth', 'F4', true);

    // alto1.note('half', 'Eb4')
    //     .note('dottedQuarter', 'F4')
    //     .note('eighth', 'Db4', true);

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
    // soloist.note('eighth', 'Db4')
    soloist.rest('half')
        .note('quarter', 'Db4')
        // note below includes part of bar 15
        .note('quarter', 'Db4');

    // soprano1.note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'Ab4', true)
    //     .note('half', 'Ab4');

    // soprano2.note('dottedQuarter', 'F4')
    //     .note('eighth', 'F4', true)
    //     .note('half', 'F4');

    // alto1.note('dottedQuarter', 'Db4')
    //     .note('eighth', 'Db4', true)
    //     .note('half', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half');

    // Bar 15
    // soloist.note('eighth', 'Db4')
    soloist.note('eighth', 'Db4')
        .note('quarter', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    // soprano1.note('half', 'Bb4')
    //     .note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'Bb4', true);

    // soprano2.note('half', 'Gb4, F4')
    //     .note('dottedQuarter', 'Gb4, F4')
    //     .note('eighth', 'F4', true);

    // alto1.note('half', 'Db4')
    //     .note('dottedQuarter', 'Db4')
    //     .note('eighth', 'C4', true);

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

    // soprano1.note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'A4', true)
    //     .note('half', 'A4');

    // soprano2.note('dottedQuarter', 'F4')
    //     .note('eighth', 'F4', true)
    //     .note('half', 'F4');

    // alto1.note('dottedQuarter', 'C4')
    //     .note('eighth', 'Db4', true)
    //     .note('half', 'Db4');

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
        // note below includes part of bar 18
        .note('quarter', 'Ab3')

    // soprano1.note('half', 'Db5')
    //     .note('dottedQuarter', 'Eb5')
    //     .note('eighth', 'Db5', true);

    // soprano2.note('whole', 'Bb4', true);

    // alto1.note('dottedHalf', 'F4', true)
    //     .note('eighth', 'F4')
    //     .note('eighth', 'Gb4', true);

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
    // soloist.note('eighth', 'Ab3')
    soloist.note('quarter', 'Eb4')
        .note('eighth', 'Db4')
        .note('quarter', 'Db4')
        .rest('quarter');
        
    // soprano1.note('whole', 'Db5');

    // soprano2.note('whole', 'Bb4');

    // alto1.note('whole', 'Gb4');

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
        // note below includes part of bar 20
        .note('quarter', 'Ab3')

    // soprano1.note('half', 'Db5')
    //     .note('dottedQuarter', 'Eb5')
    //     .note('eighth', 'C5', true);

    // soprano2.note('whole', 'Gb4');

    // alto1.note('dottedHalf', 'Ab4', true)
    //     .note('eighth', 'Ab4')
    //     .note('eighth', 'Db4', true);

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
    // soloist.note('eighth', 'Ab3')
    soloist.note('quarter', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4')
        // note below includes part of bar 21
        .note('quarter', 'Eb4');

    // soprano1.note('whole', 'C5');

    // soprano2.note('whole', 'Ab4, F4');

    // alto1.note('whole', 'Db4');

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
    // soloist.note('eighth', 'Eb4')
    soloist.note('sixteenth', 'C4')
        .note('sixteenth', 'Bb3')
        .note('eighth', 'Ab3')
        .rest('quarter')
        .note('quarter', 'F4')
        // note below includes part of bar 22
        .note('quarter', 'F4');

    // soprano1.note('half', 'C5, Bb4')
    //     .note('dottedQuarter', 'C5, Bb4')
    //     .note('eighth', 'Bb4', true);

    // soprano2.note('half', 'Gb4')
    //     .note('dottedQuarter', 'Ab4')
    //     .note('eighth', 'F4', true);

    // alto1.note('half', 'Eb4')
    //     .note('dottedQuarter', 'F4')
    //     .note('eighth', 'Db4', true);

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
    // soloist.note('eighth', 'F4')
    soloist.note('eighth', 'Eb4')
        .note('eighth', 'F4')
        .note('quarter', 'Db4')
        .rest('quarter')
        // note below includes part of bar 23
        .note('quarter', 'Db4');

    // soprano1.note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'Ab4', true)
    //     .note('half', 'Ab4');

    // soprano2.note('dottedQuarter', 'F4')
    //     .note('eighth', 'F4', true)
    //     .note('half', 'F4');

    // alto1.note('dottedQuarter', 'Db4')
    //     .note('eighth', 'Db4', true)
    //     .note('half', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('half')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half')

    // Bar 23
    // soloist.note('eighth', 'Db4')
    soloist.note('quarter', 'Db4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    // soprano1.note('half', 'Bb4')
    //     .note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'Bb4', true);

    // soprano2.note('half', 'Gb4, F4')
    //     .note('dottedQuarter', 'Gb4, F4')
    //     .note('eighth', 'F4', true);

    // alto1.note('half', 'Db4')
    //     .note('dottedQuarter', 'Db4')
    //     .note('eighth', 'C4', true);

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
        // note below includes part of bar 25
        .note('halfTiedToEighth', 'Ab4');

    // soprano1.note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'A4', true)
    //     .note('half', 'A4');

    // soprano2.note('dottedQuarter', 'F4')
    //     .note('eighth', 'F4', true)
    //     .note('half', 'F4');

    // alto1.note('dottedQuarter', 'C4')
    //     .note('eighth', 'Db4', true)
    //     .note('half', 'Db4');

    alto2.rest('whole');

    drum.rest('whole');

    snappyPerc.rest('eighth')
        .note('eighth')
        .rest('quarter')
        .note('eighth')
        .rest('dottedQuarter');

    thumpPerc.rest('dottedQuarter')
        .note('eighth')
        .rest('half');

    // Bar 25 -- first chorus
    // soloist.note('half', 'Ab4')
    soloist.rest('eighth')
        .note('quarter', 'Ab4')
        // note below includes part of bar 26
        .note('quarter', 'Ab4');

    // soprano1.note('half', 'Db5')
    //     .note('dottedQuarter', 'Eb5')
    //     .note('eighth', 'Db5', true);

    // soprano2.note('whole', 'Bb4', true);

    // alto1.note('dottedHalf', 'F4', true)
    //     .note('eighth', 'F4')
    //     .note('eighth', 'Gb4', true);
    
    alto2.repeatStart()
        .note('dottedQuarter', 'Bb3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Bb3')
        .note('eighth', 'Db4')
        .rest('eighth')
        // note below includes part of bar 26
        .note('quarter', 'Eb4');

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
    // soloist.note('eighth', 'Ab4')
    soloist.note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('eighth', 'Eb4')
        .note('eighth', 'Db4')
        .rest('eighth')
        // note below includes part of bar 27
        .note('quarter', 'Ab4');

    // soprano1.note('whole', 'Db5');

    // soprano2.note('whole', 'Bb4');

    // alto1.note('whole', 'Gb4');
    
    // alto2.note('eighth', 'Eb4')
    alto2.note('eighth', 'Eb4')
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
        .rest('half');

    // Bar 27
    // soloist.note('eighth', 'Ab4')
    soloist.note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    // soprano1.note('half', 'Db5')
    //     .note('dottedQuarter', 'Eb5')
    //     .note('eighth', 'C5', true);

    // soprano2.note('whole', 'Gb4');

    // alto1.note('dottedHalf', 'Ab4', true)
    //     .note('eighth', 'Ab4')
    //     .note('eighth', 'Db4', true);
    
    alto2.note('dottedQuarter', 'Ab3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Ab3')
        .note('eighth', 'Ab3')
        .rest('eighth')
        // note below includes part of bar 28
        .note('quarter', 'Db4');

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
        // note below includes part of bar 29
        .note('quarter', 'Ab4');

    // soprano1.note('whole', 'C5');

    // soprano2.note('whole', 'Ab4, F4');

    // alto1.note('whole', 'Db4');
    
    // alto2.note('eighth', 'Db4')
    alto2.note('eighth', 'Db4')
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
        .note('eighth');

    // Bar 29
    // soloist.note('eighth', 'Ab4')
    soloist.note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        // note below includes part of bar 30
        .note('dottedQuarter', 'Db4');

    // soprano1.note('half', 'C5, Bb4')
    //     .note('dottedQuarter', 'C5, Bb4')
    //     .note('eighth', 'Bb4', true);

    // soprano2.note('half', 'Gb4')
    //     .note('dottedQuarter', 'Ab4')
    //     .note('eighth', 'F4', true);

    // alto1.note('half', 'Eb4')
    //     .note('dottedQuarter', 'F4')
    //     .note('eighth', 'Db4', true);
    
    alto2.note('dottedQuarter', 'C4')
        .note('eighth', 'C4')
        .note('quarter', 'F4')
        .rest('eighth')
        // note below includes part of bar 30
        .note('quarter', 'Bb3');

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
    // soloist.note('eighth', 'Db4')
    soloist.note('eighth', 'Bb3')
        .rest('eighth')
        .note('quarter', 'Db4')
        .note('eighth', 'Ab3')
        .rest('eighth')
        // note below includes part of bar 31
        .note('quarter', 'Db4');

    // soprano1.note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'Ab4', true)
    //     .note('half', 'Ab4');

    // soprano2.note('dottedQuarter', 'F4')
    //     .note('eighth', 'F4', true)
    //     .note('half', 'F4');

    // alto1.note('dottedQuarter', 'Db4')
    //     .note('eighth', 'Db4', true)
    //     .note('half', 'Db4');
    
    // alto2.note('eighth', 'Bb3')
    alto2.note('quarter', 'C4')
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
        .rest('half');

    // Bar 31
    // soloist.note('eighth', 'Db4')
    soloist.note('quarter', 'Db4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    // soprano1.note('half', 'Bb4')
    //     .note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'Bb4', true);

    // soprano2.note('half', 'Gb4, F4')
    //     .note('dottedQuarter', 'Gb4, F4')
    //     .note('eighth', 'F4', true);

    // alto1.note('half', 'Db4')
    //     .note('dottedQuarter', 'Db4')
    //     .note('eighth', 'C4', true);
    
    alto2.note('dottedQuarter', 'Gb3')
        .note('eighth', 'Gb3')
        .note('eighth', 'Gb3')
        .note('eighth', 'Gb3')
        .rest('eighth')
        // note below includes part of bar 32
        .note('quarter', 'F3');

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

    // soprano1.note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'A4', true)
    //     .note('half', 'A4');

    // soprano2.note('dottedQuarter', 'F4')
    //     .note('eighth', 'F4', true)
    //     .note('half', 'F4');

    // alto1.note('dottedQuarter', 'C4')
    //     .note('eighth', 'Db4', true)
    //     .note('half', 'Db4');
    
    // alto2.note('eighth', 'F3')
    alto2.note('eighth', 'F3')
        .rest('eighth')
        .note('eighth', 'F3')
        .note('eighth', 'F3')
        .note('eighth', 'F3')
        .note('quarter', 'F3');
    
    alto2.repeat(1);

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
        // note below includes part of bar 34
        .note('quarter', 'Ab4');

    // soprano1.note('half', 'Db5')
    //     .note('dottedQuarter', 'Eb5')
    //     .note('eighth', 'Db5', true);

    // soprano2.note('whole', 'Bb4', true);

    // alto1.note('dottedHalf', 'F4', true)
    //     .note('eighth', 'F4')
    //     .note('eighth', 'Gb4', true);
    
    // alto2.note('dottedQuarter', 'Bb3')
    //     .note('eighth', 'Ab3')
    //     .note('eighth', 'Bb3')
    //     .note('eighth', 'Db4')
    //     .rest('eighth')
    //     .note('eighth', 'Eb4', true);

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
    // soloist.note('eighth', 'Ab4')
    soloist.note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('eighth', 'Eb4')
        .note('eighth', 'Db4')
        .rest('eighth')
        // note below includes part of bar 35
        .note('quarter', 'Ab4');

    // soprano1.note('whole', 'Db5');

    // soprano2.note('whole', 'Bb4');

    // alto1.note('whole', 'Gb4');
    
    // alto2.note('eighth', 'Eb4')
    //     .note('eighth', 'Eb4')
    //     .rest('eighth')
    //     .note('eighth', 'Db4')
    //     .note('quarter', 'Eb4')
    //     .note('quarter', 'Eb4');

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
        .rest('half');

    // Bar 35
    // soloist.note('eighth', 'Ab4')
    soloist.note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('quarter', 'Eb4');

    // soprano1.note('half', 'Db5')
    //     .note('dottedQuarter', 'Eb5')
    //     .note('eighth', 'C5', true);

    // soprano2.note('whole', 'Gb4');

    // alto1.note('dottedHalf', 'Ab4', true)
    //     .note('eighth', 'Ab4')
    //     .note('eighth', 'Db4', true);
    
    // alto2.note('dottedQuarter', 'Ab3')
    //     .note('eighth', 'Ab3')
    //     .note('eighth', 'Ab3')
    //     .note('eighth', 'Ab3')
    //     .rest('eighth')
    //     .note('eighth', 'Db4', true);

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
        // note below includes part of bar 37
        .note('quarter', 'Ab4');

    // soprano1.note('whole', 'C5');

    // soprano2.note('whole', 'Ab4, F4');

    // alto1.note('whole', 'Db4');
    
    // alto2.note('eighth', 'Db4')
    //     .note('eighth', 'Db4')
    //     .rest('eighth')
    //     .note('eighth', 'Ab3')
    //     .note('eighth', 'Db4')
    //     .note('quarter', 'Db4')
    //     .note('eighth', 'Db4');

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
    // soloist.note('eighth', 'Ab4')
    soloist.note('quarter', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        // note below includes part of bar 38
        .note('dottedQuarter', 'Db4');

    // soprano1.note('half', 'C5, Bb4')
    //     .note('dottedQuarter', 'C5, Bb4')
    //     .note('eighth', 'Bb4', true);

    // soprano2.note('half', 'Gb4')
    //     .note('dottedQuarter', 'Ab4')
    //     .note('eighth', 'F4', true);

    // alto1.note('half', 'Eb4')
    //     .note('dottedQuarter', 'F4')
    //     .note('eighth', 'Db4', true);
    
    // alto2.note('dottedQuarter', 'C4')
    //     .note('eighth', 'C4')
    //     .note('quarter', 'F4')
    //     .rest('eighth')
    //     .note('eighth', 'Bb3', true);

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
    // soloist.note('eighth', 'Db4')
    soloist.note('eighth', 'Bb3')
        .rest('eighth')
        .note('quarter', 'Db4')
        .note('eighth', 'Ab3')
        .rest('eighth')
        // note below includes part of bar 39
        .note('quarter', 'Db4');

    // soprano1.note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'Ab4', true)
    //     .note('half', 'Ab4');

    // soprano2.note('dottedQuarter', 'F4')
    //     .note('eighth', 'F4', true)
    //     .note('half', 'F4');

    // alto1.note('dottedQuarter', 'Db4')
    //     .note('eighth', 'Db4', true)
    //     .note('half', 'Db4');
    
    // alto2.note('eighth', 'Bb3')
    //     .note('quarter', 'C4')
    //     .note('eighth', 'Db4')
    //     .note('quarter', 'Ab3')
    //     .note('eighth', 'Db4')
    //     .note('eighth', 'Ab3');

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
        .rest('half');

    // Bar 39
    // soloist.note('eighth', 'Db4')
    soloist.note('quarter', 'Db4')
        .note('eighth', 'Db4')
        .note('eighth', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4');

    // soprano1.note('half', 'Bb4')
    //     .note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'Bb4', true);

    // soprano2.note('half', 'Gb4, F4')
    //     .note('dottedQuarter', 'Gb4, F4')
    //     .note('eighth', 'F4', true);

    // alto1.note('half', 'Db4')
    //     .note('dottedQuarter', 'Db4')
    //     .note('eighth', 'C4', true);
    
    // alto2.note('dottedQuarter', 'Gb3')
    //     .note('eighth', 'Gb3')
    //     .note('eighth', 'Gb3')
    //     .note('eighth', 'Gb3')
    //     .rest('eighth')
    //     .note('eighth', 'F3', true);

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
    soloist.note('eighth', 'Gb4')
        .note('eighth', 'F4')
        .note('quarter', 'Eb4')
        .note('dottedQuarter', 'Db4')
        .note('eighth', 'Bb3');

    // soprano1.note('dottedQuarter', 'Bb4')
    //     .note('eighth', 'A4', true)
    //     .note('half', 'A4');

    // soprano2.note('dottedQuarter', 'F4')
    //     .note('eighth', 'F4', true)
    //     .note('half', 'F4');

    // alto1.note('dottedQuarter', 'C4')
    //     .note('eighth', 'Db4', true)
    //     .note('half', 'Db4');
    
    // alto2.note('eighth', 'F3')
    //     .note('eighth', 'F3')
    //     .rest('eighth')
    //     .note('eighth', 'F3')
    //     .note('eighth', 'F3')
    //     .note('eighth', 'F3')
    //     .note('quarter', 'F3');

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
    
    // soloist.notes[13].duration = 0.357142857142857
    // soloist.notes[13].rhythm = 'quarter'
    // console.log(soloist.notes[13])

    let player = conductor.finish();

    $scope.playing = $scope.paused = $scope.muted = false;
    $scope.volume = 50;
    $scope.currentSeconds = 0;
    $scope.timeSlider = 0;
    $scope.totalSeconds = conductor.getTotalSeconds();

    let pauseTicker = false;

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
        let duration = moment.duration(parseInt(seconds), 'seconds'),
            secs = duration.seconds(),
            mins = duration.minutes(),
            hrs = duration.hours();

        if (hrs > 0) {
            mins += (hrs * 60);
        }

        return mins + ':' + pad(secs, 2);
    }
});
