import { BASE_URL, type ListType } from "@/scripts/util";

const Generator = ({ message, permalink }: Record<string, string>, route: ListType = "all") => {
  return (
    <>
      <p>For when you wish to become friendless.</p>
      <section>
        <article>
          <p>
            <span class="faded-command">git commit -m "</span>
            <code class="commit">{message}</code>
            <span class="faded-command">"</span>
          </p>
          <p>
            <a href={`/p/${permalink}`} class="secondary">
              [Permalink]
            </a>
          </p>
        </article>
      </section>
      <section>
        <p>Need it as text only for a script?</p>
        <pre>
          <code>
            {BASE_URL}
            {route}?text
          </code>
        </pre>
        <p>Need a specific case?</p>
        <ul>
          <li>
            <a href="/all">/all</a> All
          </li>
          <li>
            <a href="/safe">/safe</a> Work safe
          </li>
          <li>
            <a href="/unsafe">/unsafe</a> Work unsafe
          </li>
        </ul>
      </section>
    </>
  );
};

export default Generator;
