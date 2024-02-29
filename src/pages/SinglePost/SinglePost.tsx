import { FC, useEffect, useRef, useState } from 'react';

import styles from './SinglePost.module.scss';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const SinglePost: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('');
  useEffect(() => {
    setText(ref.current?.innerText || '');
  }, [text]);

  const getReadingTime = (text: string) => {
    const wordsPerMinute = 140;
    const words = text.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <>
      <Breadcrumb />
      <div className={styles['container']}>Single Post</div>
      <p>Время чтения {getReadingTime(text)} минуты</p>
      <div className="col-lg-9" ref={ref}>
        <h3 className="h5 mb-4 pb-2 fw-medium">
          Est quis sit phasellus proin proin fringilla eu quis. Placerat praesent blandit urna eu
          pellentesque dictum. Aliquam duis quam interdum quis. Urna, rutrum aenean lacus phasellus.
          Ipsum, ac porttitor lacus orci, cras lacus, quis leo.
        </h3>
        <h2 className="h4">Paragraph Title</h2>
        <p className="mb-4 pb-2">
          Purus ornare nisl est&nbsp;nec. Nunc, enim tellus pretium viverra quisque
          id&nbsp;in&nbsp;metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec
          dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo,
          egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel
          lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget.
          Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at&nbsp;ante orci, dictum
          fusce. Urna, sed urna fringilla faucibus euismod aliquet&nbsp;nec. Quis libero, fermentum
          amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida&nbsp;et. Scelerisque blandit
          orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et&nbsp;vivamus.
        </p>

        <div className="gallery mb-4 pb-2" data-video="true">
          <a
            href="https://www.youtube.com/watch?v=LDb-G8y88Sc"
            className="gallery-item video-item is-hovered rounded-3"
            data-sub-html='<h6 class="fs-sm text-light">Video inside blog post</h6>'
            data-lg-id="f1ee7ae3-9646-4051-ab7d-69932407068b"
          >
            <img src="assets/img/blog/single/video-cover.jpg" alt="Video preview" />
          </a>
        </div>

        <p className="mb-4 pb-2">
          Tempor donec aliquam est, a. Sit arcu tellus pharetra, bibendum hendrerit arcu, sed.
          Scelerisque dui enim libero sit ac sed lacus lectus. Quam in iaculis scelerisque feugiat
          nibh mi. Maecenas posuere lobortis praesent iaculis sagittis. Egestas vel at praesent
          ipsum pretium faucibus adipiscing gravida feugiat. Lacus, rhoncus velit at non nunc, quam
          urna, phasellus facilisis. Cursus elit posuere amet tortor at. Mi tristique congue
          vulputate eget in pellentesque tincidunt. In viverra est id nibh. Nunc tellus ultrices
          magna turpis. Viverra est morbi posuere dapibus nisi habitasse. Id tristique cursus vel
          metus.
        </p>

        <figure className="position-relative mb-4 ps-4">
          <span className="position-absolute top-0 start-0 w-3 h-100 bg-primary"></span>
          <blockquote className="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
            <p>
              Sollicitudin eget massa, elementum, purus nec fermentum vitae, elementum. Tincidunt
              vulputate lorem cursus id. Dictum tincidunt mi ornare tristique. Id sit elit pulvinar
              eu. Tempus vel, mauris sed proin aliquet vulputate cras est. Ut ornare eget a viverra.
            </p>
          </blockquote>
          <figcaption className="d-flex align-items-center pt-3 ps-1 ps-sm-3">
            <img
              src="assets/img/avatar/04.jpg"
              width="48"
              className="rounded-circle"
              alt="Jane Cooper"
            />
            <div className="ps-3">
              <h6 className="fw-semibold lh-base mb-0">Jane Cooper</h6>
              <span className="fs-sm text-muted">CEO of Ipsum Company</span>
            </div>
          </figcaption>
        </figure>

        <p className="mb-4 pb-2">
          Pellentesque laoreet neque ut dictumst fames scelerisque. In malesuada orci dapibus risus
          tellus, amet, ultrices sagittis a. Turpis vel tincidunt tristique maecenas cursus tortor,
          suscipit ut. Ullamcorper at faucibus dolor tortor suspendisse suscipit senectus convallis
          aliquam. At orci amet facilisi nunc mi vitae iaculis diam a. Mauris venenatis sed purus
          cursus torte.
        </p>
        <h2 className="h4">Paragraph Title 2</h2>
        <p className="mb-4 pb-2">
          Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non
          aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue
          ut&nbsp;senectus quisque diam quis. At&nbsp;augue accumsan, in&nbsp;bibendum. A&nbsp;eget
          et, eget quisque egestas netus&nbsp;vel. Velit, aliquet turpis convallis ullamcorper.
          Scelerisque sagittis condimentum pretium in&nbsp;vitae etiam lacinia quis amet. Porttitor
          consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed
          lacus vitae.
        </p>
        <h4 className="h6">
          <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
          PROS
        </h4>
        <ul className="mb-4 pb-2 ps-4">
          <li className="mb-1">
            A eu, ac nunc, volutpat. Augue enim ac justo, at elementum, arcu.
          </li>
          <li className="mb-1">
            At sodales quam felis ullamcorper iaculis tristique. Felis, etiam felis pellentesque sit
            neque.
          </li>
          <li className="mb-1">
            Porta ipsum quis lacus eu ipsum mattis sit quis. Massa, massa lectus porttitor laoreet
            ultricies odio fermentum arcu quam.
          </li>
          <li className="mb-1">
            Accumsan arcu neque, nisl, pellentesque fames justo consequat blandit lacus. Eget odio
            vel nulla vel.
          </li>
          <li className="mb-1">
            Diam ac phasellus est, eu urna purus blandit aliquam. Vitae accumsan et pellentesque
            diam in.
          </li>
          <li>
            Tellus arcu, lectus tincidunt neque nunc. Bibendum lacus, molestie ultrices sed arcu.
          </li>
        </ul>
        <h4 className="h6">
          <i className="bx bx-minus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
          CONS
        </h4>
        <ul className="mb-4 pb-2 ps-4">
          <li className="mb-1">
            Donec maecenas justo, et tortor quam elementum pharetra velit. Auctor dictum purus
            sollicitudin et quam vehicula amet lacus, integer.
          </li>
          <li className="mb-1">Mi elit nibh erat facilisis. Volutpat eget malesuada mi in.</li>
          <li className="mb-1">
            Tincidunt iaculis eleifend arcu egestas. Sit gravida vestibulum quam scelerisque.
          </li>
          <li className="mb-1">
            Ornare elit, vel, ullamcorper nunc nulla pellentesque ut varius. Vitae tortor nulla a
            turpis erat fermentum, rhoncus.
          </li>
          <li>
            Gravida cursus nunc habitant aliquet lacus. Tempus, interdum nullam non quam ipsum
            ultricies ac.
          </li>
        </ul>
        <h2 className="h4">Conclusion</h2>
        <p className="mb-4 pb-2">
          Venenatis faucibus platea gravida amet sed sed urna volutpat. Aliquam neque, mi, justo
          odio semper. Egestas potentiquis neque nunc, rhoncus hendrerit. Viverra gravida pretium
          dolor eget placerat morbi proin eget. Vestibulum vitae ultrices vel sed sit quis. Ac quis
          diam at nulla libero. Turpis duis magna tellus condimentum.
        </p>
        <p className="mb-4 pb-2">
          Velit parturient tellus tellus, congue pulvinar tellus viverra. In&nbsp;cum massa
          mattis&nbsp;ac. Amet vitae massa ut&nbsp;mi&nbsp;etiam. Auctor aliquam tristique felis
          donec eu&nbsp;sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.
        </p>
        <p className="mb-4 pb-2">
          Pellentesque laoreet neque ut dictumst fames scelerisque. In malesuada orci dapibus risus
          tellus, amet, ultrices sagittis a. Turpis vel tincidunt tristique maecenas cursus tortor,
          suscipit ut. Ullamcorper at faucibus dolor tortor suspendisse suscipit senectus convallis
          aliquam. At orci amet facilisi nunc mi vitae iaculis diam a. Mauris venenatis sed purus
          cursus torte.
        </p>
        <h2 className="h4">Paragraph Title 2</h2>
        <p className="mb-4 pb-2">
          Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non
          aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue
          ut&nbsp;senectus quisque diam quis. At&nbsp;augue accumsan, in&nbsp;bibendum. A&nbsp;eget
          et, eget quisque egestas netus&nbsp;vel. Velit, aliquet turpis convallis ullamcorper.
          Scelerisque sagittis condimentum pretium in&nbsp;vitae etiam lacinia quis amet. Porttitor
          consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed
          lacus vitae.
        </p>
        <h4 className="h6">
          <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
          PROS
        </h4>
        <ul className="mb-4 pb-2 ps-4">
          <li className="mb-1">
            A eu, ac nunc, volutpat. Augue enim ac justo, at elementum, arcu.
          </li>
          <li className="mb-1">
            At sodales quam felis ullamcorper iaculis tristique. Felis, etiam felis pellentesque sit
            neque.
          </li>
          <li className="mb-1">
            Porta ipsum quis lacus eu ipsum mattis sit quis. Massa, massa lectus porttitor laoreet
            ultricies odio fermentum arcu quam.
          </li>
          <li className="mb-1">
            Accumsan arcu neque, nisl, pellentesque fames justo consequat blandit lacus. Eget odio
            vel nulla vel.
          </li>
          <li className="mb-1">
            Diam ac phasellus est, eu urna purus blandit aliquam. Vitae accumsan et pellentesque
            diam in.
          </li>
          <li>
            Tellus arcu, lectus tincidunt neque nunc. Bibendum lacus, molestie ultrices sed arcu.
          </li>
        </ul>
        <h4 className="h6">
          <i className="bx bx-minus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
          CONS
        </h4>
        <ul className="mb-4 pb-2 ps-4">
          <li className="mb-1">
            Donec maecenas justo, et tortor quam elementum pharetra velit. Auctor dictum purus
            sollicitudin et quam vehicula amet lacus, integer.
          </li>
          <li className="mb-1">Mi elit nibh erat facilisis. Volutpat eget malesuada mi in.</li>
          <li className="mb-1">
            Tincidunt iaculis eleifend arcu egestas. Sit gravida vestibulum quam scelerisque.
          </li>
          <li className="mb-1">
            Ornare elit, vel, ullamcorper nunc nulla pellentesque ut varius. Vitae tortor nulla a
            turpis erat fermentum, rhoncus.
          </li>
          <li>
            Gravida cursus nunc habitant aliquet lacus. Tempus, interdum nullam non quam ipsum
            ultricies ac.
          </li>
        </ul>
        <h2 className="h4">Conclusion</h2>
        <p className="mb-4 pb-2">
          Venenatis faucibus platea gravida amet sed sed urna volutpat. Aliquam neque, mi, justo
          odio semper. Egestas potentiquis neque nunc, rhoncus hendrerit. Viverra gravida pretium
          dolor eget placerat morbi proin eget. Vestibulum vitae ultrices vel sed sit quis. Ac quis
          diam at nulla libero. Turpis duis magna tellus condimentum.
        </p>
        <p className="mb-4 pb-2">
          Velit parturient tellus tellus, congue pulvinar tellus viverra. In&nbsp;cum massa
          mattis&nbsp;ac. Amet vitae massa ut&nbsp;mi&nbsp;etiam. Auctor aliquam tristique felis
          donec eu&nbsp;sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.
        </p>
        <p className="mb-4 pb-2">
          Pellentesque laoreet neque ut dictumst fames scelerisque. In malesuada orci dapibus risus
          tellus, amet, ultrices sagittis a. Turpis vel tincidunt tristique maecenas cursus tortor,
          suscipit ut. Ullamcorper at faucibus dolor tortor suspendisse suscipit senectus convallis
          aliquam. At orci amet facilisi nunc mi vitae iaculis diam a. Mauris venenatis sed purus
          cursus torte.
        </p>
        <h2 className="h4">Paragraph Title 2</h2>
        <p className="mb-4 pb-2">
          Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non
          aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue
          ut&nbsp;senectus quisque diam quis. At&nbsp;augue accumsan, in&nbsp;bibendum. A&nbsp;eget
          et, eget quisque egestas netus&nbsp;vel. Velit, aliquet turpis convallis ullamcorper.
          Scelerisque sagittis condimentum pretium in&nbsp;vitae etiam lacinia quis amet. Porttitor
          consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed
          lacus vitae.
        </p>
        <h4 className="h6">
          <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
          PROS
        </h4>
        <ul className="mb-4 pb-2 ps-4">
          <li className="mb-1">
            A eu, ac nunc, volutpat. Augue enim ac justo, at elementum, arcu.
          </li>
          <li className="mb-1">
            At sodales quam felis ullamcorper iaculis tristique. Felis, etiam felis pellentesque sit
            neque.
          </li>
          <li className="mb-1">
            Porta ipsum quis lacus eu ipsum mattis sit quis. Massa, massa lectus porttitor laoreet
            ultricies odio fermentum arcu quam.
          </li>
          <li className="mb-1">
            Accumsan arcu neque, nisl, pellentesque fames justo consequat blandit lacus. Eget odio
            vel nulla vel.
          </li>
          <li className="mb-1">
            Diam ac phasellus est, eu urna purus blandit aliquam. Vitae accumsan et pellentesque
            diam in.
          </li>
          <li>
            Tellus arcu, lectus tincidunt neque nunc. Bibendum lacus, molestie ultrices sed arcu.
          </li>
        </ul>
        <h4 className="h6">
          <i className="bx bx-minus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
          CONS
        </h4>
        <ul className="mb-4 pb-2 ps-4">
          <li className="mb-1">
            Donec maecenas justo, et tortor quam elementum pharetra velit. Auctor dictum purus
            sollicitudin et quam vehicula amet lacus, integer.
          </li>
          <li className="mb-1">Mi elit nibh erat facilisis. Volutpat eget malesuada mi in.</li>
          <li className="mb-1">
            Tincidunt iaculis eleifend arcu egestas. Sit gravida vestibulum quam scelerisque.
          </li>
          <li className="mb-1">
            Ornare elit, vel, ullamcorper nunc nulla pellentesque ut varius. Vitae tortor nulla a
            turpis erat fermentum, rhoncus.
          </li>
          <li>
            Gravida cursus nunc habitant aliquet lacus. Tempus, interdum nullam non quam ipsum
            ultricies ac.
          </li>
        </ul>
        <h2 className="h4">Conclusion</h2>
        <p className="mb-4 pb-2">
          Venenatis faucibus platea gravida amet sed sed urna volutpat. Aliquam neque, mi, justo
          odio semper. Egestas potentiquis neque nunc, rhoncus hendrerit. Viverra gravida pretium
          dolor eget placerat morbi proin eget. Vestibulum vitae ultrices vel sed sit quis. Ac quis
          diam at nulla libero. Turpis duis magna tellus condimentum.
        </p>
        <p className="mb-4 pb-2">
          Velit parturient tellus tellus, congue pulvinar tellus viverra. In&nbsp;cum massa
          mattis&nbsp;ac. Amet vitae massa ut&nbsp;mi&nbsp;etiam. Auctor aliquam tristique felis
          donec eu&nbsp;sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.
        </p>
        <p className="mb-4 pb-2">
          Pellentesque laoreet neque ut dictumst fames scelerisque. In malesuada orci dapibus risus
          tellus, amet, ultrices sagittis a. Turpis vel tincidunt tristique maecenas cursus tortor,
          suscipit ut. Ullamcorper at faucibus dolor tortor suspendisse suscipit senectus convallis
          aliquam. At orci amet facilisi nunc mi vitae iaculis diam a. Mauris venenatis sed purus
          cursus torte.
        </p>
        <h2 className="h4">Paragraph Title 2</h2>
        <p className="mb-4 pb-2">
          Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non
          aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue
          ut&nbsp;senectus quisque diam quis. At&nbsp;augue accumsan, in&nbsp;bibendum. A&nbsp;eget
          et, eget quisque egestas netus&nbsp;vel. Velit, aliquet turpis convallis ullamcorper.
          Scelerisque sagittis condimentum pretium in&nbsp;vitae etiam lacinia quis amet. Porttitor
          consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed
          lacus vitae.
        </p>
        <h4 className="h6">
          <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
          PROS
        </h4>
        <ul className="mb-4 pb-2 ps-4">
          <li className="mb-1">
            A eu, ac nunc, volutpat. Augue enim ac justo, at elementum, arcu.
          </li>
          <li className="mb-1">
            At sodales quam felis ullamcorper iaculis tristique. Felis, etiam felis pellentesque sit
            neque.
          </li>
          <li className="mb-1">
            Porta ipsum quis lacus eu ipsum mattis sit quis. Massa, massa lectus porttitor laoreet
            ultricies odio fermentum arcu quam.
          </li>
          <li className="mb-1">
            Accumsan arcu neque, nisl, pellentesque fames justo consequat blandit lacus. Eget odio
            vel nulla vel.
          </li>
          <li className="mb-1">
            Diam ac phasellus est, eu urna purus blandit aliquam. Vitae accumsan et pellentesque
            diam in.
          </li>
          <li>
            Tellus arcu, lectus tincidunt neque nunc. Bibendum lacus, molestie ultrices sed arcu.
          </li>
        </ul>
        <h4 className="h6">
          <i className="bx bx-minus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
          CONS
        </h4>
        <ul className="mb-4 pb-2 ps-4">
          <li className="mb-1">
            Donec maecenas justo, et tortor quam elementum pharetra velit. Auctor dictum purus
            sollicitudin et quam vehicula amet lacus, integer.
          </li>
          <li className="mb-1">Mi elit nibh erat facilisis. Volutpat eget malesuada mi in.</li>
          <li className="mb-1">
            Tincidunt iaculis eleifend arcu egestas. Sit gravida vestibulum quam scelerisque.
          </li>
          <li className="mb-1">
            Ornare elit, vel, ullamcorper nunc nulla pellentesque ut varius. Vitae tortor nulla a
            turpis erat fermentum, rhoncus.
          </li>
          <li>
            Gravida cursus nunc habitant aliquet lacus. Tempus, interdum nullam non quam ipsum
            ultricies ac.
          </li>
        </ul>
        <h2 className="h4">Conclusion</h2>
        <p className="mb-4 pb-2">
          Venenatis faucibus platea gravida amet sed sed urna volutpat. Aliquam neque, mi, justo
          odio semper. Egestas potentiquis neque nunc, rhoncus hendrerit. Viverra gravida pretium
          dolor eget placerat morbi proin eget. Vestibulum vitae ultrices vel sed sit quis. Ac quis
          diam at nulla libero. Turpis duis magna tellus condimentum.
        </p>
        <p className="mb-4 pb-2">
          Velit parturient tellus tellus, congue pulvinar tellus viverra. In&nbsp;cum massa
          mattis&nbsp;ac. Amet vitae massa ut&nbsp;mi&nbsp;etiam. Auctor aliquam tristique felis
          donec eu&nbsp;sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.
        </p>

        <hr className="mb-4" />
        <div className="d-flex flex-sm-row flex-column pt-2">
          <h6 className="mt-sm-1 mb-sm-2 mb-3 me-2 text-nowrap">Related Tags:</h6>
          <div>
            <a href="#" className="btn btn-sm btn-outline-secondary me-2 mb-2">
              #lifestyle
            </a>
            <a href="#" className="btn btn-sm btn-outline-secondary me-2 mb-2">
              #tech
            </a>
            <a href="#" className="btn btn-sm btn-outline-secondary me-2 mb-2">
              #business
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
