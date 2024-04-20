import React from "react";
import Image from "next/image";
import {ptserif } from "../layout";

const SinglePage = () => {

    const pengwin111 = <div className="h-[450px] relative w-full my-12">
                <Image src="/penguin.jpeg" width={800} height={800} alt="gambar" style={{width: 'auto', height: '100%'}} className="m-auto"/>
            </div>

    const loremTexs = <>You are not Venus on the Clamshell, you were not born from foam, you just were never that fucking ethereal. Your body reminds you of that too often, either in its wrongness or in its pain. You are Vulcan at the Forge and no matter what beautiful things you make it is your leg, your wrong leg, all that limp, that makes it in your iconographic story. Metal things are the opposite of ethereal. They are heavy and real and often literally reflect the world. But trust me if you wear a white lace collar, a Peter Pan collar, the right milkmaid dress, no, they will not forget the leg or the foot that drags, your eternal spondee. The It Girl is effortless and you are all effort.<br/><br/>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi posuere ultrices leo eu congue. Vivamus efficitur, diam in ultrices vestibulum, eros est eleifend purus, sit amet volutpat enim dui nec risus. Vestibulum elementum placerat erat. Proin a justo massa. Aliquam sit amet turpis quis nulla fermentum tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec placerat nisl vehicula, iaculis magna vel, tincidunt orci. Suspendisse dictum erat nisl, eget elementum ante tempor venenatis. Aliquam id leo dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eleifend odio sed velit congue, eu imperdiet neque bibendum. In vulputate eleifend sapien in ultricies. Mauris aliquam ex metus, in egestas dolor fermentum eu. Vivamus et lorem quis justo cursus imperdiet.</> 
    const lorem2 = <>Sed dictum, massa at feugiat suscipit, leo leo dictum neque, ac pellentesque arcu nulla id odio. Aliquam sodales magna varius, condimentum est id, rhoncus ipsum. Pellentesque feugiat ligula ut lectus lacinia lobortis. Mauris luctus luctus sem. Nullam lacinia quam at nisi rutrum tempor. Vivamus vitae ex in mi mattis consectetur. Nulla suscipit lorem eu urna gravida feugiat. Vestibulum sollicitudin eu velit ut vulputate. Fusce feugiat consequat mi ut egestas. Maecenas egestas dui eu tristique dignissim.<br/><br/>Donec consectetur dui quam, sit amet pretium nisl fermentum eu. Aliquam neque odio, consequat et finibus ac, faucibus ut ipsum. Donec sollicitudin sagittis cursus. Cras eget tellus varius, pellentesque sapien ut, commodo neque. Maecenas euismod, eros vitae suscipit ullamcorper, orci mi scelerisque nisl, congue rhoncus nibh augue viverra nisl. Donec non aliquet nisi. Maecenas pulvinar volutpat ornare. Sed viverra sed nisl et lacinia. Morbi lobortis accumsan mi. Aliquam bibendum, est id viverra gravida, arcu lacus scelerisque urna, vel venenatis nunc nulla ac dui. Sed ante ante, commodo vel odio sollicitudin, hendrerit feugiat tellus. Duis nunc tortor, porttitor vel dictum eget, ornare non purus. Sed non dictum erat. Suspendisse eget tellus a diam ornare fermentum ut pulvinar turpis.</>

    
    

  return(
    <div className="flex flex-col h-auto w-[800px] m-auto my-24">
        <div className="">
            <h1 className="text-4xl font-bold">Judul dari artikel</h1>
            <div className="flex gap-4 my-4 w-max">
                <Image src="/logo.png" width={48} height={48} alt="person" />
                <div className="self-center">
                    <p>Alvin Al</p>
                    <p className="text-xs">20 April 2024</p>
                </div>
            </div>
            <hr className="bg-gray-800 h-px border-0"/>
        </div>

        <div className="">
            
            <div className="h-[450px] relative w-full my-12">
                <Image src="/penguin2.webp" width={800} height={800} alt="gambar" style={{width: 'auto', height: '100%'}} className="m-auto"/>
            </div>
            <div>
                <div className={`${ptserif.variable} font-normal font-sans text-xl text-gray-700 leading-relaxed `}>{loremTexs}{pengwin111}{lorem2}</div>
            </div>
        </div>
    </div>
  );
};

export default SinglePage;
