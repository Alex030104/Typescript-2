$(document).ready(function() {
    $('.serie').click(function() {
      var name = $(this).find('td:nth-child(2)').text();
      var channel = $(this).find('td:nth-child(3)').text();
      var poster = $(this).find('td:nth-child(7)').text();
      $('#seriesDetail').find('.card-title').text(name);
      $('#seriesDetail').find('.card-subtitle').text(channel);
      $('#seriesDetail').find('.card-img-top').text(poster);
      $('.card').show();
      if (name === 'Breaking Bad') {
        $('#seriesDetail').find('.card-subtitle').text( 'Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer.');
        $('#seriesDetail').find('.card-text').text('https://www.amc.com/shows/breaking-bad');
        $('#seriesDetail').find('.card-img-top').text(imageUrl='https://i.imgur.com/GGje0vc.jpg');
        
      }
      if (name === 'Orange Is the New Black') {
        $('#seriesDetail').find('.card-subtitle').text( 'The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary');
        $('#seriesDetail').find('.card-text').text('https://www.netflix.com/co/title/70242311');
        $('#seriesDetail').find('.card-img-top').text(imageUrl =  'https://i.imgur.com/EvKe48G.jpg') ;
 
      } 
     if (name === 'Game of Thrones') {
        $('#seriesDetail').find('.card-subtitle').text( ' Game of Thrones is a fantasy drama television series that follows various noble families as they fight for control of the Seven Kingdoms of Westeros, while an ancient enemy returns to threaten the realm.');
        $('#seriesDetail').find('.card-text').text('https://www.hbo.com/game-of-thrones');
        $('#seriesDetail').find('.card-img-top').text(imageUrl =  'https://i.imgur.com/TDCEV1S.jpg') ;
      }
     if (name === 'The Big Bang Theory') {
        $('#seriesDetail').find('.card-subtitle').text( 'Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.');
        $('#seriesDetail').find('.card-text').text('https://www.cbs.com/shows/big_bang_theory/about/');
        $('#seriesDetail').find('.card-img-top').text(imageUrl =  'https://i.imgur.com/uAEpVWk.jpg') ;;
      }
      if (name === 'Sherlock') {
        $('#seriesDetail').find('.card-subtitle').text( 'Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps');
        $('#seriesDetail').find('.card-text').text('https://www.bbc.co.uk/programmes/b018ttws');
        $('#seriesDetail').find('.card-img-top').text(imageUrl =  'https://i.imgur.com/02B7qhj.jpg') ;
      }
     if (name === 'A Very English Scandal') {
        $('#seriesDetail').find('.card-subtitle').text( 'A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Prestons book of the same name.');
        $('#seriesDetail').find('.card-text').text('https://www.bbc.co.uk/programmes/p065smy4');
        $('#seriesDetail').find('.card-img-top').text(imageUrl =  'https://i.imgur.com/D4y3DrQ.jpg') ;
      }
      if(false){}
      $('.card').show();
    });
  });